/* =========================================================
 * Service API & Custom Promise Handler
 * Modul 3: Pemrograman Asynchronous & API Call
 * Mendemonstrasikan:
 * 1. Pembuatan Promise manual dengan new Promise(executor)
 * 2. Pemanggilan resolve() saat koneksi internet berhasil & data diterima
 * 3. Pemanggilan reject() saat koneksi internet gagal / timeout
 * ========================================================= */

/**
 * Custom Promise: Melakukan request ke External API dengan pemantauan batas waktu (timeout).
 * Menggunakan constructor new Promise((resolve, reject) => { ... })
 *
 * - Memanggil resolve() saat respon API berhasil diterima
 * - Memanggil reject() secara otomatis saat tidak ada koneksi internet atau batas waktu habis
 *
 * @param url - Endpoint External API
 * @param timeoutMs - Batas waktu toleransi request (default 8000ms)
 * @returns Promise<T>
 */
export function requestDenganTimeout<T>(
  url: string,
  timeoutMs: number = 8000
): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    // Timer untuk mendeteksi timeout jika internet lambat / tidak merespon
    const timer = setTimeout(() => {
      // [REJECT]: Dipanggil saat koneksi internet timeout
      reject(
        new Error(
          "Koneksi timeout: Gagal terhubung ke External API. Periksa koneksi internet Anda."
        )
      );
    }, timeoutMs);

    // Pre-built async function: fetch()
    fetch(url)
      .then((response: Response) => {
        clearTimeout(timer);
        if (!response.ok) {
          // [REJECT]: Dipanggil jika server merespons dengan HTTP error code (4xx, 5xx)
          reject(
            new Error(
              `Gagal mengambil data dari server. (HTTP Status: ${response.status})`
            )
          );
          return;
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          // [RESOLVE]: Dipanggil saat data berhasil didapatkan dari internet
          resolve(data as T);
        }
      })
      .catch((err: unknown) => {
        clearTimeout(timer);
        // [REJECT]: Dipanggil otomatis saat koneksi internet terputus (offline)
        const pesan =
          err instanceof Error
            ? err.message
            : "Tidak dapat terhubung ke internet. Pastikan perangkat online.";
        reject(new Error(pesan));
      });
  });
}

/**
 * Custom Promise: Memvalidasi ketersediaan data ulasan yang diterima
 * Memperlihatkan resolve() jika data ada, dan reject() jika data kosong
 */
export function validasiDataUlasan(jumlahData: number): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    if (jumlahData > 0) {
      resolve(true); // [RESOLVE]: Data berhasil diverifikasi
    } else {
      reject(new Error("Tidak ada data ulasan eksternal yang tersedia")); // [REJECT]: Data kosong
    }
  });
}
