export interface TestimoniModel {
  name: string;
  image: string;
  testimoni: string;
  car: string;
  age?: number;
  address?: string;
}

export const DataTestimoniList: TestimoniModel[] = [
  {
    name: "Pak Andi",
    image: "testimoni-andi-jimny-jogja.png",
    testimoni:
      "Awalnya cuma nanya-nanya soal Jimny, eh malah jadi beli beneran 😂. Untung dibantu Mas Regi yang sabar banget jelasin detail mobil dan prosesnya. Bonusnya juga lumayan. Sukses terus Mas!",
    car: "Jimny",
    address: "Yogyakarta",
  },
  {
    name: "Pak Imam",
    image: "testimoni-imam-carry-jogja.jpeg",
    testimoni:
      "Saya sangat puas setelah membeli Carry Box BGN ini. Ukurannya pas di mobil, bahannya kokoh dan tahan cuaca. Sangat membantu untuk bawa barang tambahan saat perjalanan jauh. Proses pemasangannya juga gampang, nggak ribet sama sekali. Sekarang tiap kali road trip, bawaan jadi lebih teratur dan aman. Recommended banget buat yang butuh ruang ekstra di mobil!",
    car: "Carry",
    address: "Yogyakarta",
  },
    {
    name: "Budi & Rina",
    image: "testimoni-budi&rina.jpeg",
    testimoni:
      "Kami memutuskan membeli Suzuki XL7 sebagai mobil keluarga, dan pilihan kami benar-benar tepat! Mulai dari proses pemesanan, pelayanan sales yang sangat ramah dan informatif,semuanya memuaskan. Anak-anak pun senang karena kabinnya lega dan nyaman. Terima kasih Mas Regi, pelayanan Anda luar biasa!",
    car: "Suzuki XL7",
    address: "Yogyakarta",
  },
      {
    name: "Carla",
    image: "testimoni-carla.jpeg",
    testimoni:
      "Saya sangat puas dengan pelayanan dari Suzuki tegalrejo dengan mas Regi dari awal sampai serah terima unit semuanya jelas dan ramah. XL7 Hybrid ini saya pilih karena tampilannya gagah, fitur-fitur lengkap, dan tentunya lebih irit karena sudah pakai teknologi hybrid. Semoga mobil ini bisa jadi teman perjalanan yang nyaman buat keluarga saya. Terima kasih Mas Regi...!",
    car: "Suzuki XL7 Hybrid",
    address: "Yogyakarta",
  },
];
