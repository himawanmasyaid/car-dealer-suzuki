export interface TestimoniModel {
  name: string;
  image: string; 
  testimoni: string;
  car: string,
  age?: number;
  address?: string;
}

export const DataTestimoniList:  TestimoniModel[] = [
  {
    name: "Pak Andi",
    image: "testimoni-andi-jimny-jogja.png",
    testimoni: "Awalnya cuma nanya-nanya soal Jimny, eh malah jadi beli beneran 😂. Untung dibantu Mas Regi yang sabar banget jelasin detail mobil dan prosesnya. Bonusnya juga lumayan. Sukses terus Mas!",
    car: "Jimny",
    age: 40,
    address: "Yogyakarta",
  },
    {
    name: "Pak Imam, 54 tahun, Yogyakarta",
    image: "testimoni-imam-carry-jogja.jpeg",
    testimoni: "Saya sangat puas setelah membeli Carry Box BGN ini. Ukurannya pas di mobil, bahannya kokoh dan tahan cuaca. Sangat membantu untuk bawa barang tambahan saat perjalanan jauh. Proses pemasangannya juga gampang, nggak ribet sama sekali. Sekarang tiap kali road trip, bawaan jadi lebih teratur dan aman. Recommended banget buat yang butuh ruang ekstra di mobil!",
    car: "Carry",
    age: 54,
    address: "Yogyakarta",
  },
]