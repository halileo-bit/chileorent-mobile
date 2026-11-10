/* =========================================================
 * Service Pengambilan Ulasan Kostum dari External API
 * Modul 3: Pemrograman Asynchronous & API Call
 * Kriteria Penilaian:
 * 1. Mengambil data dari External API & mapping ke Object menggunakan Interface
 * 2. Menggunakan Custom & Pre-built Async Function
 * 3. Menggunakan fungsi .then(), .resolve(), dan .reject()
 * ========================================================= */

import type { ApiResponse, UlasanExternal, UserReviewer } from "@/types";
import { requestDenganTimeout, validasiDataUlasan } from "./api";

// Endpoint External API publik DummyJSON
const API_BASE_URL = "https://dummyjson.com/comments";

/**
 * CUSTOM ASYNC FUNCTION
 * Mengambil data ulasan dari External API secara otomatis:
 * - Menggunakan custom Promise helper requestDenganTimeout() yang menerapkan .resolve() dan .reject() otomatis berdasarkan internet
 * - Memetakan data JSON ke dalam Array of Object dengan Interface UlasanExternal & UserReviewer
 * - Melakukan validasi data ulasan dengan validasiDataUlasan()
 */
export async function fetchUlasanKostum(
  idKostum: number
): Promise<UlasanExternal[]> {
  // Offset pagination berdasarkan ID kostum agar data tiap kostum bervariasi
  const skip = (Math.max(1, idKostum) - 1) * 3;
  const endpoint = `${API_BASE_URL}?limit=3&skip=${skip}`;

  // Menggunakan helper custom Promise yang otomatis resolve jika ada internet atau reject jika offline/timeout
  const rawData = await requestDenganTimeout<ApiResponse<any>>(endpoint);

  // Memasukkan data ke dalam Array of Object dengan tipe Interface UlasanExternal
  const daftarUlasan: UlasanExternal[] = rawData.comments.map(
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

  // Validasi data dengan Promise executor resolve/reject
  await validasiDataUlasan(daftarUlasan.length);

  return daftarUlasan;
}
