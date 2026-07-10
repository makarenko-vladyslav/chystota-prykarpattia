export default function Page() {
  return (
    <>
      {/* 1. HERO */}
      <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-border">
        <div className="p-2xl lg:p-3xl flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border bg-background">
          <h1 className="font-display text-5xl lg:text-7xl font-extrabold leading-[1.05] mb-xl text-balance">
            Клінінг квартир у ЖК «Калинова Слобода» та «Липки» з гарантією 50 000 грн
          </h1>
          <p className="font-body text-muted text-lg lg:text-xl max-w-xl mb-2xl">
            Професійний догляд за дорогими інтер'єрами: натуральний камінь, шпон та матові фасади. Використовуємо німецьку еко-хімію Kiehl та обладнання Karcher без ризику пошкодження поверхонь.
          </p>
          <a href="#pricing" className="bg-accent text-accent-foreground font-display font-bold px-xl py-lg w-fit text-lg hover:opacity-90 transition-opacity flex items-center gap-md">
            Розрахувати вартість за чек-листом
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="block"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
        <div className="relative min-h-[50vh] lg:min-h-full bg-surface">
          <img 
            src="https://images.pexels.com/photos/11370616/pexels-photo-11370616.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
            alt="Бездоганно чистий преміальний інтер'єр вітальні" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 2. TECHNICAL SPECS */}
      <section className="p-2xl lg:p-3xl border-b border-border bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2xl">
          <div className="lg:col-span-5 flex flex-col justify-between gap-xl">
            <div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
                Технічний регламент вашого спокою
              </h2>
            </div>
            <div className="relative h-64 border border-border">
              <img 
                src="https://images.pexels.com/photos/6899344/pexels-photo-6899344.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                alt="Професійне обладнання Karcher у роботі" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 gap-0 border-t border-border">
            {[
              { t: "Матеріальна відповідальність", d: "Фінансова гарантія цілісності майна на суму 50 000 грн закріплена в договорі." },
              { t: "Німецька еко-хімія Kiehl", d: "Засоби без хлору та фосфатів. Безпечно для немовлят, домашніх тварин та алергіків." },
              { t: "Обладнання Santoemma та Karcher", d: "Професійні екстрактори та парогенератори для видалення бруду з мікротріщин без тертя." },
              { t: "Пунктуальність 100%", d: "Клінер прибуває на об'єкт за 15 хвилин до початку. Ваші плани на день залишаються незмінними." }
            ].map((item, i) => (
              <div key={i} className="border-b border-border py-xl grid grid-cols-1 sm:grid-cols-12 gap-lg items-start">
                <div className="sm:col-span-2 font-display text-accent text-lg font-bold pt-xs">0{i + 1}</div>
                <div className="sm:col-span-10">
                  <h3 className="font-display font-bold text-xl mb-sm">{item.t}</h3>
                  <p className="font-body text-muted leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES */}
      <section className="border-b border-border bg-surface">
        <div className="p-2xl lg:p-3xl border-b border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-xl">
            <div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold max-w-2xl">
                Системне обслуговування нерухомості
              </h2>
            </div>
            <a href="#pricing" className="border border-border bg-background px-xl py-lg font-display font-medium text-sm uppercase hover:bg-border transition-colors text-nowrap">
              Переглянути повний чек-лист
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Підтримуюче прибирання", d: "Регулярний сервіс для підтримки чистоти поверхонь за 74 пунктами чек-листа." },
            { t: "Генеральне прибирання", d: "Повне відновлення вигляду інтер'єру, включаючи дезінфекцію сантехніки та очищення витяжок." },
            { t: "Післяремонтний клінінг", d: "Видалення цементного пилу, фуги та скотчу з використанням спеціалізованих розчинників." },
            { t: "Хімчистка м'яких меблів", d: "Глибоке очищення оббивки екстракторним методом без залишкового запаху хімії." }
          ].map((s, i) => (
            <div key={i} className="p-xl border-b lg:border-b-0 border-r border-border hover:bg-background transition-colors flex flex-col h-full min-h-[16rem] justify-center">
              <div>
                <h3 className="font-display font-bold text-xl mb-md">{s.t}</h3>
                <p className="font-body text-muted text-sm leading-relaxed">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="relative h-64 lg:h-96 w-full border-t border-border">
           <img 
              src="https://images.pexels.com/photos/7856682/pexels-photo-7856682.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
              alt="Результат післяремонтного клінінгу" 
              className="absolute inset-0 w-full h-full object-cover"
            />
        </div>
      </section>

      {/* 4. SURFACE CARE */}
      <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-border bg-background">
        <div className="p-2xl lg:p-3xl flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-xl">
            Зберігаємо ресурс ваших матеріалів
          </h2>
          <p className="font-body text-muted text-lg mb-2xl max-w-xl">
            Ми знаємо специфіку оздоблення в сучасних новобудовах Івано-Франківська. Замість універсальних засобів використовуємо вузькопрофільні склади.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-xl gap-y-2xl border-t border-border pt-2xl">
            {[
              { t: "Матові фасади", d: "Видалення слідів рук без появи глянцевих плям." },
              { t: "Натуральний камінь", d: "Очищення без руйнування захисного шару мармуру чи граніту." },
              { t: "Індукційні плити", d: "Видалення нагару без подряпин скляної поверхні." },
              { t: "Сантехніка", d: "Видалення вапняного нальоту без пошкодження хрому чи чорного матового покриття." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-sm">
                <h3 className="font-display font-bold text-lg">{item.t}</h3>
                <p className="font-body text-muted text-sm">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-rows-2">
          <div className="relative min-h-[300px] border-b border-border bg-surface">
            <img 
              src="https://images.pexels.com/photos/4484783/pexels-photo-4484783.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
              alt="Догляд за матовими фасадами на кухні" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="relative min-h-[300px] bg-surface">
            <img 
              src="https://images.pexels.com/photos/6612168/pexels-photo-6612168.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
              alt="Очищення натурального каменю та хрому" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 5. PRICING TRANSPARENCY (CTA) */}
      <section id="pricing" className="grid grid-cols-1 lg:grid-cols-2 border-b border-border">
         <div className="relative min-h-[40vh] lg:min-h-full border-b lg:border-b-0 lg:border-r border-border">
            <img 
              src="https://images.pexels.com/photos/6195275/pexels-photo-6195275.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
              alt="Детальний огляд ідеально чистої поверхні" 
              className="absolute inset-0 w-full h-full object-cover"
            />
         </div>
         <div className="bg-accent text-accent-foreground p-2xl lg:p-4xl flex flex-col justify-center items-start">
            <h2 className="font-display text-4xl lg:text-5xl font-extrabold mb-xl text-balance leading-tight">
              Фіксація вартості до початку робіт
            </h2>
            <p className="font-body text-lg mb-2xl font-medium max-w-md text-accent-foreground/90">
              Ціна формується на основі площі та обраного пакету послуг. Жодних доплат за «складність» чи високі стелі після завершення прибирання.
            </p>
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="bg-background text-foreground font-display font-bold px-xl py-lg text-lg hover:opacity-90 transition-opacity w-full sm:w-auto text-center">
              Отримати пропозицію в Telegram
            </a>
         </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-surface p-2xl lg:p-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-2xl border-t border-border">
        <div className="lg:col-span-5">
          <div className="font-display font-bold text-2xl mb-sm uppercase tracking-wider">Чистота Прикарпаття</div>
          <p className="font-body text-muted text-sm mb-xl max-w-xs">
            Професійний сервіс у вашому ЖК
          </p>
          <div className="font-body text-xs text-muted uppercase">
            © {new Date().getFullYear()} Чистота Прикарпаття.<br/>Всі права захищені.
          </div>
        </div>
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-xl font-body text-sm">
          <div className="flex flex-col gap-md">
            <div className="text-muted border-b border-border pb-xs mb-xs font-display font-medium uppercase">Локація</div>
            <div>Івано-Франківськ, працюємо в усіх районах міста</div>
            <div className="mt-md text-muted border-b border-border pb-xs mb-xs font-display font-medium uppercase">Графік</div>
            <div>Пн-Нд 08:00 — 21:00</div>
          </div>
          <div className="flex flex-col gap-md">
            <div className="text-muted border-b border-border pb-xs mb-xs font-display font-medium uppercase">Контакти</div>
            <a href="tel:+380670000000" className="text-foreground hover:text-accent font-medium">+38 (067) 000 00 00</a>
            <div className="mt-md text-muted border-b border-border pb-xs mb-xs font-display font-medium uppercase">Правова інформація</div>
            <div>Матеріальна відповідальність застрахована</div>
          </div>
        </div>
      </footer>
    </>
  );
}