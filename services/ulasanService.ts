/* =========================================================
 * Service Pengambilan Ulasan Kostum dari External API
 * Modul 3: Pemrograman Asynchronous & API Call
 * Kriteria Penilaian:
 * 1. Mengambil data dari External API & mapping ke Object menggunakan Interface
 * 2. Menggunakan Custom & Pre-built Async Function
 * 3. Menggunakan fungsi .then(), .resolve(), dan .reject()
 * ========================================================= */

import type { ApiResponse, UlasanExternal, UserReviewer } from "@/types";
import { checkKoneksiApi, validasiDataUlasan } from "./api";

// Endpoint External API publik DummyJSON
const API_BASE_URL = "https://dummyjson.com/comments";

/**
 * 1. FUNGSI MENGGUNAKAN .then() CHAINING
 * Menggunakan Pre-built Async Function: fetch()
 * Menggunakan .then() untuk menangani response dan parsing JSON
 * Memasukkan data ke dalam Object menggunakan Interface UlasanExternal & UserReviewer
 */
export function fetchUlasanWithThen(
  idKostum: number
): Promise<UlasanExternal[]> {
  // Offset pagination berdasarkan ID kostum agar data tiap kostum bervariasi
  const skip = (Math.max(1, idKostum) - 1) * 3;
  const endpoint = `${API_BASE_URL}?limit=3&skip=${skip}`;

  // Menggunakan pre-built async function `fetch` dan method `.then()`
  return fetch(endpoint)
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error(
          `Gagal menghubungi server! Status HTTP: ${response.status}`
        );
      }
      // .then() mengembalikan Promise hasil parse JSON
      return response.json();
    })
    .then((data: ApiResponse<any>) => {
      // Memasukkan data ke dalam Array of Object dengan tipe Interface UlasanExternal
      const daftarUlasan: UlasanExternal[] = data.comments.map(
        (item: any, index: number) => {
          // Object reviewer sesuai Interface UserReviewer
          const reviewer: UserReviewer = {
            id: item.user.id,
            username: item.user.username,
            fullName: item.user.fullName || `@${item.user.username}`,
          };

          // Object ulasan sesuai Interface UlasanExternal
          const ulasan: UlasanExternal = {
            id: item.id,
            body: item.body,
            postId: item.postId,
            likes: item.likes,
            user: reviewer,
            rating: 4 + (index % 2 === 0 ? 1 : 0), // rating simulasi 4 atau 5 bintang
            tanggal: `2026-10-${15 + ((index + idKostum) % 12)}`,
          };

          return ulasan;
        }
      );

      return daftarUlasan;
    });
}

/**
 * 2. CUSTOM ASYNC FUNCTION
 * Fungsi async buatan sendiri (Custom Async Function) yang mengombinasikan:
 * - Custom Promise resolve() & reject() dari checkKoneksiApi()
 * - Pre-built async function via fetchUlasanWithThen()
 * - Validasi data dengan validasiDataUlasan()
 */
export async function fetchUlasanKostum(
  idKostum: number,
  simulateError: boolean = false
): Promise<UlasanExternal[]> {
  // Langkah 1: Jalankan simulasi pemeriksaan koneksi dengan custom Promise (resolve / reject)
  await checkKoneksiApi(simulateError);

  // Langkah 2: Ambil data dari external API menggunakan .then() chaining
  const ulasans = await fetchUlasanWithThen(idKostum);

  // Langkah 3: Validasi data dengan Promise executor
  await validasiDataUlasan(ulasans.length);

  return ulasans;
}
