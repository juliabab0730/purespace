
import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="header">
    <a class="logo" href="#">PURE<span>SPACE</span></a>

    <nav class="navigation">
  <a href="#services">Услуги</a>
  <a href="#advantages">О компании</a>
  <a href="#calculator">Стоимость</a>
  <a href="#contacts">Контакты</a>
</nav>

    <a class="header-phone" href="tel:+78005553535">
      +7 (800) 555-35-35
    </a>

    <button class="menu-toggle" aria-label="Открыть меню">
      <span></span>
      <span></span>
    </button>
  </header>

  <main>
    <section class="hero">
      <div class="hero-image"></div>

      <div class="hero-content">
        <span class="eyebrow">ПРОФЕССИОНАЛЬНАЯ УБОРКА · МОСКВА</span>

        <h1>
          Пространство,<br />
          в котором хочется<br />
          <em>жить.</em>
        </h1>

        <p>
          Профессиональная уборка квартир и домов.
          Безупречная чистота, внимание к деталям
          и забота о вашем времени.
        </p>

        <a href="#calculator" class="primary-button">
  Рассчитать стоимость
</a>

        <div class="hero-note">
          ЧИСТОТА — ЭТО БОЛЬШЕ, ЧЕМ ПОРЯДОК
        </div>
      </div>

      <div class="hero-counter">
        <span>01 / 05</span>
        <span>PURESPACE EXPERIENCE</span>
      </div>
    </section>

    

    <section class="services" id="services">
  <div class="services-heading">
    <div>
      <span class="eyebrow">ЧТО МЫ ПРЕДЛАГАЕМ</span>
      <h2>Чистота в каждой детали</h2>
    </div>

    <p>
      Продуманный подход к уборке,
      который возвращает вашему дому
      ощущение свежести и комфорта.
    </p>
  </div>

  <div class="services-grid">
    <article class="service-card">
      <div class="service-image service-image-one"></div>
      <div class="service-info">
        <span class="service-number">01 / EVERYDAY CARE</span>
        <h3>Поддерживающая уборка</h3>
        <p>
          Регулярный уход за пространством:
          чистые поверхности, свежий воздух
          и порядок в каждой комнате.
        </p>
      </div>
    </article>

    <article class="service-card">
      <div class="service-image service-image-two"></div>
      <div class="service-info">
        <span class="service-number">02 / DEEP CLEANING</span>
        <h3>Генеральная уборка</h3>
        <p>
          Глубокая очистка всех основных
          поверхностей, труднодоступных мест
          и деталей интерьера.
        </p>
      </div>
    </article>

    <article class="service-card">
      <div class="service-image service-image-three"></div>
      <div class="service-info">
        <span class="service-number">03 / AFTER RENOVATION</span>
        <h3>Уборка после ремонта</h3>
        <p>
          Удаление строительной пыли
          и загрязнений, чтобы подготовить
          помещение к жизни.
        </p>
      </div>
    </article>
  </div>
</section>
<section class="advantages" id="advantages">
  <div class="advantages-layout">

    <div class="advantages-main">
      <span class="eyebrow">ФИЛОСОФИЯ PURESPACE</span>

      <h2>
        Чистота — это
        <em>больше, чем порядок.</em>
      </h2>

      <p>
        Это ощущение пространства, в котором
        всё находится на своём месте.
      </p>
    </div>

    <div class="advantages-image"></div>

    <div class="advantages-list">
      <article class="advantage">
        <span class="advantage-number">01</span>
        <h3>Внимание к деталям</h3>
        <p>Чистота начинается с мелочей, которые создают настоящее ощущение комфорта.</p>
      </article>

      <article class="advantage">
        <span class="advantage-number">02</span>
        <h3>Индивидуальный подход</h3>
        <p>Учитываем особенности помещения и ваши личные пожелания.</p>
      </article>

      <article class="advantage">
        <span class="advantage-number">03</span>
        <h3>Бережный уход</h3>
        <p>Подбираем подходящие средства для каждой поверхности.</p>
      </article>

      <article class="advantage">
        <span class="advantage-number">04</span>
        <h3>Ваше время</h3>
        <p>Берём заботу о чистоте на себя, освобождая время для важного.</p>
      </article>
    </div>

  </div>
</section>
<section class="process" id="process">
  <div class="process-heading">
    <span class="eyebrow">ПРОСТО И ПРОЗРАЧНО</span>
    <h2>От заявки до <em>идеальной чистоты.</em></h2>
    <p>
      Всего несколько шагов отделяют вас от чистого
      и уютного пространства.
    </p>
  </div>

  <div class="process-grid">
    <article class="process-step">
      <span class="process-number">01</span>
      <h3>Оставьте заявку</h3>
      <p>Выберите услугу и укажите площадь помещения.</p>
    </article>

    <article class="process-step">
      <span class="process-number">02</span>
      <h3>Согласуйте детали</h3>
      <p>Обсудим ваши пожелания и уточним стоимость.</p>
    </article>

    <article class="process-step">
      <span class="process-number">03</span>
      <h3>Мы приедем</h3>
      <p>Подготовим всё необходимое для уборки.</p>
    </article>

    <article class="process-step">
      <span class="process-number">04</span>
      <h3>Наслаждайтесь</h3>
      <p>Оцените чистоту и комфорт обновлённого дома.</p>
    </article>
  </div>
</section>
<section class="calculator" id="calculator">
  <div class="calculator-heading">
    <span class="eyebrow">ИНДИВИДУАЛЬНЫЙ РАСЧЁТ</span>
    <h2>Уборка, созданная<br /><em>под ваше пространство.</em></h2>
    <p>
      Выберите подходящий формат уборки
      и укажите площадь помещения.
    </p>
  </div>

  <div class="calculator-panel">
    <div class="calculator-fields">
      <label for="cleaning-type">Тип уборки</label>
      <select id="cleaning-type">
        <option value="regular">Поддерживающая уборка</option>
        <option value="deep">Генеральная уборка</option>
        <option value="repair">После ремонта</option>
      </select>

      <label for="area">Площадь помещения, м²</label>
      <input
        type="number"
        id="area"
        min="20"
        max="500"
        value="50"
      />

      <span class="calculator-hint">
        Минимальная расчётная площадь — 20 м²
      </span>
    </div>

    <div class="calculator-result">
      <span class="eyebrow">ПРЕДВАРИТЕЛЬНАЯ СТОИМОСТЬ</span>
      <div class="calculator-price" id="calculator-price">
        5 000 ₽
      </div>
      <p>Точная стоимость уточняется после согласования деталей.</p>
      <a href="#contacts" class="primary-button">
        Оставить заявку <span>↗</span>
      </a>
    </div>
  </div>

  <p class="calculator-disclaimer">
    * Демонстрационный расчёт. Цены указаны для примера.
  </p>
</section>

<section class="gallery" id="gallery">
  <div class="gallery-heading">
    <div>
      <span class="eyebrow">АТМОСФЕРА PURESPACE</span>
      <h2>Пространство после<br /><em>нашей заботы.</em></h2>
    </div>

   
  </div>

  <div class="gallery-grid">
    <div class="gallery-image gallery-image-main"></div>

    <div class="gallery-side">
      <div class="gallery-image gallery-image-top"></div>
      <div class="gallery-image gallery-image-bottom"></div>
    </div>
  </div>
</section>
<section class="contacts" id="contacts">
  <div class="contacts-layout">

    <div class="contacts-info">
      <span class="eyebrow">СВЯЖИТЕСЬ С НАМИ</span>

      <h2>
        Ваш комфорт<br />
        <em>начинается здесь.</em>
      </h2>

      <p>
        Расскажите нам о вашем пространстве —
        мы свяжемся с вами, чтобы обсудить детали
        и подобрать подходящий формат уборки.
      </p>

      <div class="contacts-note">
        <span>PURESPACE</span>
        <span>Забота о пространстве. Внимание к деталям.</span>
      </div>
    </div>

    <form class="contact-form" id="contact-form">
      <div class="form-heading">
        <span class="eyebrow">ОСТАВИТЬ ЗАЯВКУ</span>
        <p>Заполните форму, и мы свяжемся с вами.</p>
      </div>

      <label for="client-name">Ваше имя</label>
      <input
        type="text"
        id="client-name"
        name="name"
        placeholder="Как к вам обращаться?"
        required
      />

      <label for="client-phone">Номер телефона</label>
      <input
        type="tel"
        id="client-phone"
        name="phone"
        placeholder="+7 (___) ___-__-__"
        required
      />

      <label for="client-service">Интересующая услуга</label>
      <select id="client-service" name="service" required>
        <option value="">Выберите услугу</option>
        <option value="Поддерживающая уборка">Поддерживающая уборка</option>
        <option value="Генеральная уборка">Генеральная уборка</option>
        <option value="Уборка после ремонта">Уборка после ремонта</option>
      </select>

      <label for="client-message">Комментарий</label>
      <textarea
        id="client-message"
        name="message"
        rows="3"
        placeholder="Площадь помещения, пожелания..."
      ></textarea>

      <button type="submit" class="contact-submit">
        Отправить заявку
      </button>

      <span class="form-disclaimer">
        Нажимая кнопку, вы соглашаетесь на обработку
        предоставленных данных.
      </span>
    </form>

  </div>
</section>


  </main>

  <footer id="contacts">
    <a class="logo" href="#">PURE<span>SPACE</span></a>
    <span>Пространство для жизни.</span>
    <footer class="site-footer">
  <div class="footer-credit">
  <span>project by: <strong>Юлия Бабешко</strong></span>
  <a href="https://t.me/shyuuu0" target="_blank" rel="noopener noreferrer">
    tg:@shyuuu0
  </a>
</div>

  </footer>
`

const menuButton = document.querySelector('.menu-toggle')
const navigation = document.querySelector('.navigation')

menuButton.addEventListener('click', () => {
  navigation.classList.toggle('navigation-open')
  menuButton.classList.toggle('menu-active')
})

navigation.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navigation.classList.remove('navigation-open')
    menuButton.classList.remove('menu-active')
  })
})
// CALCULATOR

const cleaningType = document.querySelector('#cleaning-type')
const areaInput = document.querySelector('#area')
const priceOutput = document.querySelector('#calculator-price')

const cleaningPrices = {
  regular: 100,
  deep: 180,
  repair: 220
}

function calculatePrice() {
  const area = Number(areaInput.value)

  if (!Number.isFinite(area) || area < 20 || area > 500) {
    priceOutput.textContent = '—'
    return
  }

  const pricePerMeter = cleaningPrices[cleaningType.value]
  const totalPrice = area * pricePerMeter

  priceOutput.textContent =
    totalPrice.toLocaleString('ru-RU') + ' ₽'
}

cleaningType.addEventListener('change', calculatePrice)
areaInput.addEventListener('input', calculatePrice)

calculatePrice()

// SCROLL REVEAL ANIMATIONS

const revealGroups = [
  '.services-heading',
  '.service-card',
  '.advantages-main',
  '.advantages-image',
  '.advantage',
  '.process-heading',
  '.process-step',
  '.calculator-heading',
  '.calculator-panel',
  '.gallery-heading',
  '.gallery-image-main',
  '.gallery-side',
]

revealGroups.forEach(selector => {
  const elements = document.querySelectorAll(selector)

  elements.forEach((element, index) => {
    element.classList.add('scroll-reveal')

    if (selector === '.advantages-image') {
      element.classList.add('scroll-reveal-image')
    }

    if (
      selector === '.service-card' ||
      selector === '.advantage' ||
      selector === '.process-step'
    ) {
      element.style.setProperty(
        '--reveal-delay',
        `${index % 4 * 140}ms`
      )
    }
  })
})

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        } else {
          entry.target.classList.remove('is-visible')
        }
      })
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -5% 0px'
    }
  )

  document.querySelectorAll('.scroll-reveal').forEach(element => {
    revealObserver.observe(element)
  })
} else {
  document.querySelectorAll('.scroll-reveal').forEach(element => {
    element.classList.add('is-visible')
  })
}

// CONTACT FORM — TELEGRAM INTEGRATION

const contactForm = document.querySelector('#contact-form')

if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault()

    const submitButton = contactForm.querySelector('.contact-submit')
    const originalText = submitButton.textContent

    const formData = new FormData(contactForm)

    const requestData = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message')
    }

    submitButton.disabled = true
    submitButton.textContent = 'Отправляем...'

    try {
      const response = await fetch(
        'https://purespace-requests.juliabab0730.workers.dev',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestData)
        }
      )

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Не удалось отправить заявку')
      }

      contactForm.reset()
      submitButton.textContent = 'Заявка отправлена!'

    } catch (error) {
      console.error('Ошибка отправки заявки:', error)
      submitButton.textContent = 'Ошибка. Попробуйте ещё раз'

    } finally {
      submitButton.disabled = false

      setTimeout(() => {
        submitButton.textContent = originalText
      }, 3500)
    }
  })
}

