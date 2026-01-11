import React from "react";
import mantar from "../images/mantar-yetistiriciligi-kursu.jpg";

export default function Hakkımızda() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold pt-6 pb-6 text-lime-500">
        {" "}
        Hakkımızda
      </h1>
      <img src={mantar} className="flex m-auto" />
      <div className="text-md font-sans antialiased italic text-justify mt-10 text-yellow-700 indent-8 mx-4 mb-10">
        <p>
          Mantarların bitki oldukları sanılır. Oysa mantarlar, canlılar aleminde
          başlı başına bir gruptur ve fotosentez yapamadıklarından, bitki
          sayılamazlar. Hayvanlar ve bitkiler alemi arasında yer alır ve fungus
          diye bilinen kendi alemlerini oluştururlar. Günümüzde, bir milyon
          kadar mantar çeşidini bilimsel olarak tanımlamak mümkündür. Yaklaşık
          sekiz yüz elli bin çeşit mantar iki milimetreden küçüktür. Yaklaşık
          yüz elli bin tür ise makro-mantar denen iki milimetreden büyüktür ve
          büyük çoğunluğu tropik bölgelerde yaşar. Türkiye’de bunlardan on bin
          çeşit mevcuttur. Yani Türkiye mantarlar konusunda zengin bir ülke.
          Makro-mantarlar, yerin altında yaşayan ve bütün yıl boyunca faaliyet
          gösteren miselyum adlı ağacın, mevsimi geldiğinde ve uygun koşullar
          oluştuğunda meyvelerini vermesiyle oluşur. Bu ağaç gözümüze görünmez
          ama yer altında bir örümcek ağı gibi ince yapılıdır, bir metreküp
          orman toprağındaki miselyum yaklaşık 400 bin kilometredir. Hala mantar
          veren bazı miselyumların 1500 yaşında olduğu tahmin edilmektedir.
          Mantarlar spor (tohumcuk) üretir. Mantarların üreme organlarında
          genelde dört spor olur. Bu sporların büyüklüğü 2-200 mikron
          arasındadır. Orta boy bir kültür mantarı üç dört günde 16 milyar spor
          üretir. Kimi mantarlar ise günde 1 trilyon spor üretebilirler.
          Mantarlar ekosistemlerde önemli roller üstlenirler. Bir grup mantar
          ölü organizmaları parçalayarak, ölü yaprakların, dalların, ağaçların
          parçalanmasını sağlar. Aksi takdirde çok kısa bir süre içinde
          gezegenin bitki örtüsü, çürümeyen atıklarının altında hapis kalır,
          boğularak ölürdü. Parazit grubu mantarlar canlı organizmalardan
          besinlerini alır, çoğu zaman onların ölümüne neden olurlar. Zayıf,
          yaşlı, yaralı, hasta bitkileri öldürerek genç ve sağlıklı bitkilere
          yer açarlar. Bir başka grup mantar ise, birlikte yaşadığı bitkilere
          vitamin, mineral, antibiyotik ve azotlu maddeler verir, karşılığında
          şeker ve diğer karbon esaslı maddeler alır. Bu tür mantarlar belli
          ağaçların dibinde bulunur. Bu mantarların yok olması beraber
          yaşadıkları ağaçların hastalanmasına ya da ölmesine yol açar. Tabii
          tersi de aynen geçerlidir. Yağışsız dönemlerde kuruyan bazı mantar
          türleri, yağış olunca tekrar canlanma özelliğine sahip. Yalnız her
          canlanışta hazmedilmeleri güçleşir. Mantarlar protein bakımdan son
          derece zengindir.
        </p>
      </div>
    </div>
  );
}
