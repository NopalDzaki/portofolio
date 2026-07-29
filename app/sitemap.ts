import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://naufaldzaki.my.id",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    // Jika nanti kamu punya halaman lain (misal blog atau case study), tambahkan di bawah ini:
    // {
    //   url: "https://naufaldzaki.com/blog",
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.8,
    // },
  ];
}
