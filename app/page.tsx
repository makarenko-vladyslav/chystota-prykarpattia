import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen border-x border-border max-w-[1920px] mx-auto flex flex-col bg-background">
      {/* HEADER: Elegant Navigation */}
      <header className="border-b border-border flex flex-col md:flex-row justify-between items-center px-lg py-md gap-md bg-surface sticky top-0 z-50">
        <div className="font-display font-semibold text-2xl text-foreground tracking-wide uppercase">
          Чистота<span className="text-accent font-light">Прикарпаття</span>
        </div>
        
        <nav className="font-body text-sm font-medium flex gap-lg">
          <a href="#services" className="text-muted hover:text-accent transition-colors">Послуги</a>
          <a href="#stats" className="text-muted hover:text-accent transition-colors">Про нас</a>
        </nav>

        <div className="flex items-center gap-md">
          <a href="tel:+380990000000" className="font-body font-medium text-foreground hover:text-accent transition-colors hidden sm:block">
            +38 (099) 000-00-00
          </a>
          <a href="#contact" className="bg-accent text-accent-foreground font-body font-medium px-md py-sm hover:bg-foreground hover:text-background transition-colors">
            Замовити дзвінок
          </a>
        </div>
      </header>

      <main className="flex-grow">
        {/* HERO: Premium Cleaning */}
        <section className="grid grid-cols-1 lg:grid-cols-12 border-b border-border relative bg-background">
          <div className="lg:col-span-7 flex flex-col justify-center px-lg py-2xl lg:p-3xl border-b lg:border-b-0 lg:border-r border-border">
            <div className="text-accent text-sm font-body font-semibold uppercase tracking-widest mb-lg">
              Івано-Франківськ
            </div>
            
            <h1 className="font-display font-bold text-[clamp(2rem,4vw,4.5rem)] leading-[1.1] mb-xl text-foreground">
              Бездоганний клінінг преміальних квартир в Івано-Франківську
            </h1>
            
            <p className="font-body text-muted text-lg lg:text-xl max-w-2xl mb-xl font-normal leading-relaxed">
              Професійний догляд за квартирами у ЖК «Калинова Слобода», «Липки» та «Містечко Центральне». Використовуємо німецьку еко-хімію Kiehl та обладнання Karcher для збереження дорогих матеріалів.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-lg gap-y-md mb-2xl">
              {[
                "Матеріальне страхування на 50 000 грн",
                "Чек-лист на 50 пунктів контролю",
                "Фіксована ціна до початку робіт",
                "Безпечно для немовлят та алергіків"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-sm">
                  <svg className="w-5 h-5 text-accent mt-[2px] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="font-body text-base text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div>
              <a href="#contact" className="inline-flex bg-accent text-accent-foreground font-body font-medium px-xl py-lg hover:bg-foreground hover:text-background transition-colors">
                Розрахувати вартість прибирання
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative min-h-[50vh] lg:min-h-full">
            <img 
              src="https://images.pexels.com/photos/11126099/pexels-photo-11126099.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
              alt="Світлий преміальний інтер'єр" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </section>

        {/* SERVICES: Delicate Care */}
        <section id="services" className="border-b border-border bg-surface">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-4 p-xl lg:p-2xl border-b lg:border-b-0 lg:border-r border-border flex flex-col justify-between">
              <div>
                <h2 className="font-display font-bold text-3xl lg:text-4xl mb-lg text-foreground">Делікатний догляд за кожною поверхнею</h2>
                <p className="font-body text-muted text-base leading-relaxed">
                  Ми відмовилися від агресивних засобів на користь сертифікованих німецьких концентратів, що не пошкоджують структуру каменю чи матові фасади.
                </p>
              </div>
              
              <div className="mt-xl pt-lg border-t border-border hidden lg:block">
                <img 
                  src="https://images.pexels.com/photos/28576636/pexels-photo-28576636.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                  alt="Процес делікатного очищення" 
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>
            
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2">
              {[
                { title: "Матові фасади", desc: "Очищення без розводів та збереження оксамитової текстури" },
                { title: "Штучний камінь", desc: "Використання pH-нейтральної хімії Kiehl для запобігання плямам" },
                { title: "Індукційні плити", desc: "Робота виключно м'яким текстилем без ризику мікроподряпин" },
                { title: "Натуральний шпон", desc: "Вологе прибирання за технологією мінімального зволоження" }
              ].map((item, idx) => (
                <div key={idx} className="p-xl border-b md:even:border-l border-border hover:bg-background transition-colors flex flex-col justify-start bg-surface">
                  <span className="font-body font-semibold text-accent text-lg mb-sm block">{String(idx + 1).padStart(2, '0')}</span>
                  <h3 className="font-display font-semibold text-2xl text-foreground mb-sm">{item.title}</h3>
                  <p className="font-body text-muted text-base">{item.desc}</p>
                </div>
              ))}
              <div className="md:col-span-2 relative min-h-[300px]">
                 <img 
                  src="https://images.pexels.com/photos/8089161/pexels-photo-8089161.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                  alt="Текстура натурального каменю" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* DIFFERENTIATORS */}
        <section className="py-2xl lg:py-3xl px-lg border-b border-border bg-background">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-5xl text-foreground mb-2xl max-w-3xl">Чому мешканці преміум-ЖК довіряють нам свої оселі</h2>
            
            <div className="flex flex-col border-t border-border">
              {[
                { title: "Власний інвентар", desc: "Привозимо професійну техніку Karcher та драбини для важкодоступних зон" },
                { title: "Відсутність запаху", desc: "Після візиту в оселі залишається свіжість, а не аромат хлору чи дешевих ароматизаторів" },
                { title: "Пунктуальність", desc: "Клінери прибувають на об'єкт за 10 хвилин до старту, не порушуючи ваш графік" },
                { title: "Дистанційний сервіс", desc: "Надсилаємо фотозвіт результатів у Telegram, якщо ви замовили прибирання для батьків" }
              ].map((item, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-lg py-xl border-b border-border items-start">
                  <div className="md:col-span-1 font-body font-semibold text-accent text-xl">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div className="md:col-span-4 font-display font-semibold text-2xl text-foreground">
                    {item.title}
                  </div>
                  <div className="md:col-span-7 font-body text-muted text-lg leading-relaxed">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF: Stats */}
        <section id="stats" className="border-b border-border bg-surface grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-[400px] border-b lg:border-b-0 lg:border-r border-border p-xl flex flex-col justify-center bg-background">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground max-w-md relative z-10">Наш досвід у цифрах та результатах</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {[
              { val: "240+", label: "Прибираннь у ЖК «Калинова Слобода» за рік" },
              { val: "150к", label: "Грн — сумарний ліміт страхового покриття" },
              { val: "0", label: "Випадків пошкодження матових чи дзеркальних поверхонь" },
              { val: "100%", label: "Заповнення чек-листа контролю якості на об'єкті" }
            ].map((stat, idx) => (
              <div key={idx} className="p-xl border-b sm:even:border-l border-border flex flex-col justify-center min-h-[240px] bg-surface">
                <div className="font-display font-light text-5xl lg:text-6xl text-accent mb-md">{stat.val}</div>
                <div className="font-body text-muted text-base leading-relaxed max-w-[200px]">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING & PROCESS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 bg-background border-b border-border">
          <div className="lg:col-span-6 p-2xl lg:p-3xl border-b lg:border-b-0 lg:border-r border-border flex flex-col justify-center">
            <h2 className="font-display font-bold text-4xl lg:text-5xl mb-lg text-foreground">Прозоре ціноутворення без прихованих платежів</h2>
            <p className="font-body text-muted text-lg mb-2xl max-w-lg leading-relaxed">
              Менеджер оцінює складність робіт та тип матеріалів до початку прибирання. Вартість не змінюється, навіть якщо процес займе більше часу, ніж планувалося.
            </p>
            <a href="#contact" className="w-full sm:w-max text-center bg-foreground text-background font-body font-medium px-xl py-lg hover:bg-accent hover:text-accent-foreground transition-colors">
              Замовити безкоштовний візит оцінювача
            </a>
          </div>
          
          <div className="lg:col-span-6 relative">
            <img 
              src="https://images.pexels.com/photos/4440523/pexels-photo-4440523.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
              alt="Оцінка вартості прибирання" 
              className="w-full h-full object-cover min-h-[400px]"
            />
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="contact" className="bg-surface grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-4 p-xl lg:p-2xl border-b lg:border-b-0 lg:border-r border-border flex flex-col justify-between">
          <div>
            <div className="font-display font-semibold text-2xl text-foreground tracking-wide uppercase mb-lg">
              Чистота<span className="text-accent font-light">Прикарпаття</span>
            </div>
            <p className="font-body text-muted text-base leading-relaxed">
              Працюємо щодня з 08:00 до 21:00. Спеціалізовані бригади для ЖК Липки, Містечко Центральне та Калинова Слобода.
            </p>
          </div>
        </div>

        <div className="lg:col-span-4 p-xl lg:p-2xl border-b lg:border-b-0 lg:border-r border-border font-body text-base flex flex-col gap-lg justify-center">
          <div>
            <span className="block text-muted text-sm mb-xs font-medium uppercase tracking-wider">Адреса</span>
            <span className="text-foreground">Вул. Гетьмана Мазепи, 164<br/>Івано-Франківськ</span>
          </div>
          <div>
            <span className="block text-muted text-sm mb-xs font-medium uppercase tracking-wider">Телефон</span>
            <a href="tel:+380990000000" className="text-accent hover:text-foreground transition-colors text-lg font-medium">+38 (099) 000-00-00</a>
          </div>
          <div>
            <span className="block text-muted text-sm mb-xs font-medium uppercase tracking-wider">Мережа</span>
            <a href="#" className="text-foreground hover:text-accent transition-colors">Instagram: @chystota.if</a>
          </div>
        </div>

        <div className="lg:col-span-4 relative hidden lg:block">
           <img 
              src="https://images.pexels.com/photos/6943507/pexels-photo-6943507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
              alt="Чистота і затишок" 
              className="absolute inset-0 w-full h-full object-cover"
            />
        </div>
      </footer>
    </div>
  );
}
