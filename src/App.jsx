import DataImage from "./data";
import {listTools, listProyek} from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
      <div className="animate__animated animate__fadeInUp animate__delay-3s">
        <div className="flex item-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl ">
          <q>Tenang di depan layar, tapi selalu melangkah menuju hal baru</q>
        </div>
        <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Ega Mulyana</h1>
        <p className="text-base/loose mb-6 opacity-50 text-justify">Saya tumbuh bersama teknologi, dari memperbaiki perangkat, merancang desain visual, hingga mengolah video. Setiap proyek adalah langkah kecil dari rasa ingin tahu yang besar dan semangat untuk terus belajar .
        </p>
        <div className="flex item-center sm:gap-4 gap-2">
          <a href="https://drive.google.com/file/d/18hgKeZ839xWFyQPgd7dTwQzQbdQSlDBo/view?usp=sharing" className="bg-blue-800 p-4 rounded 2xl hover:bg-blue-600">Download CV <i className="ri-download-line ri-lg"></i>
          </a>
          <a href="#proyek" className="bg-zinc-800 p-4 rounded 2xl hover:bg-zinc-600">Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
          </a>
        </div>
        </div>
      <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s" loading="lazy" />
      </div>

      {/* Tentang Saya */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div className="xl:w-2/3 lg:w3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy" />
        <p className="text-base/loose mb-10 text-justify">
  Halo, saya Ega Mulyana, lulusan Sarjana Komputer, yang senang berkutat dengan dunia IT dan desain. Sejak kuliah hingga sekarang, saya aktif sebagai IT Support, freelancer, hingga berbagi ilmu di seminar desain. Terbiasa membantu orang dengan troubleshooting komputer, instalasi operating system, instalasi software, desain grafis, hingga editing foto dan video.

  Bagi saya, bekerja di depan komputer bukan hanya rutinitas, tapi juga cara untuk bertahan, belajar, dan berkarya. Kadang saya bekerja, kadang bermain game, tapi selalu berusaha membagi waktu dengan seimbang. Saya percaya, meski mencari pekerjaan itu sulit, selalu ada rezeki halal yang bisa datang dari layar komputer, entah lewat project lepas, desain sederhana, atau sekadar membantu orang di sekitar. Dan dari situlah, saya belajar bahwa setiap langkah kecil pun bisa berarti besar.
</p>

          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy" />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  21<span className="text-blue-500">+</span>
                </h1>
                <p>
                  Proyek Selesai
                </p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  6<span className="text-blue-500">+</span>
                </h1>
                <p>
                  Tahun Pengalaman
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools Saya</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut ini adalah beberapa tools yang sering saya pakai dalam mengerjakan sebuah projek</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm-grid-cols-2 grid-cols-1 gap-4">
            {listTools.map(tool=> (
               <div className="flex item-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true"> 
               <img src={tool.gambar} alt="Tools Image" className="w-14 h-14 object-contain bg-zinc-800 p-1 rounded-md group-hover:bg-zinc-900"
                  />
               <div>
                 <h4 className="font-bold">{tool.nama}</h4>
                 <p className="opacity-50">{tool.ket}</p>
               </div>
             </div>
            ))}
           
          </div>
        </div>

      </div>
       {/* Tentang Saya */}

       {/* Proyek */}
<div className="Proyek mt-32 py-10" id="proyek">
  <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Proyek</h1>
  <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut adalah beberapa proyek yang telah saya buat</p>
  <div className="proyek-box mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5"> 
            {listProyek.map((proyek) =>(
              <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
                <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
                <div>
                  <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                  <p className="text-base/loose mb-4">{proyek.desk}</p>
                  <div className="flex flex-wrap gap-2">
                    {proyek.tools.map((tool, index) => (
                      <p
                        key={index}
                        className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold text-sm"
                      >
                        {tool}
                      </p>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                  <a
  href={proyek.link}
  target="_blank" // biar buka di tab baru
  rel="noopener noreferrer"
  className="bg-blue-700 p-3 rounded-lg block border border-zinc-600 hover:bg-blue-600 text-center"
>
  Lihat Detail
</a>

                  </div>
                </div>
              </div>
            ))}
  </div>
</div>
       {/* Proyek */}

       {/* Kontak */}
<div className="kontak mt-32 sm:p-10 p-0" id="kontak" >
  <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Kontak</h1>
  <p className="textbase/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Mari terhubung dengan saya
  </p>
  <form action="https://formsubmit.co/egamulyana19ix@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label className="font-semibold" >Nama Lengkap</label>
        <input type="text" name="nama" placeholder="Masukan Nama . . ." className="border border-zinc-500 p-2 rounded-md" required/>
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold" >Email</label>
        <input type="email" name="email" placeholder="Masukan Email . . ." className="border border-zinc-500 p-2 rounded-md" required/>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="pesan" className="font-semibold">Pesan</label>
        <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan . . ." className="border border-zinc-500 p-2 rounded-md" required></textarea>
      </div>
      <div className="text-center">
        <button type="sumbit" className="bg-blue-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-blue-600">Kirim Pesan</button>
      </div>
      </div>
      </form>
</div>
       {/* Kontak */}
    </>
  )
}

export default App
