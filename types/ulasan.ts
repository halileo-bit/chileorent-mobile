/* =========================================================
 * Interface Data Ulasan dari External API
 * Kriteria Penilaian: Memasukkan data ke dalam Object menggunakan Interface
 * ========================================================= */

export interface UserReviewer {
  id: number;
  username: string;
  fullName: string;
}

export interface UlasanExternal {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: UserReviewer;
  rating?: number;
  tanggal?: string;
}

export interface ApiResponse<T> {
  comments: T[];
  total: number;
  skip: number;
  limit: number;
}
