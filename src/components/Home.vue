<template>
  <div>

    <div class="jumbotron jumbotron-fluid text-white">
      <div class="container">
        <div class="row">
          <div class="col"><span class="badge badge-primary">2&nbsp;МЕСЯЦА</span></div>
          <div class="col text-center"><span class="badge badge-primary">ОНЛАЙН</span></div>
          <div class="col text-right"><span class="badge badge-primary">БЕСПЛАТНО</span></div>
        </div>
        <h1 class="display-3"><strong>БИЗНЕС КАК СИСТЕМА</strong></h1>
        <p class="lead">практический онлайн-марафон</p>
        <p><span class="badge badge-light">12&nbsp;февраля&nbsp;&mdash; 18&nbsp;апреля</span></p>
        <!-- <a href="#" class="btn btn-primary">ПОДРОБНЕЕ</a> -->
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col text-center">
          <h2>Вам знакомы эти проблемы?</h2>
        </div>
      </div>
      <div class="row last-row">
        <div class="col" style="height: 150px;">
          <vue-word-cloud 
            :words="words"
            :rotation="0"
            :font-size-ratio="5"
            :color="([, weight]) => weight > 500 ? '#333' : '#333'"
          >
            <template slot-scope="{text, weight, originalWord}">
              <div style="" @mouseover="onWordMouseOver(originalWord)">
                {{ text }}
              </div>
            </template>
          </vue-word-cloud>
        </div>
      </div>
    </div>

    <div class="container-fluid bg-dark text-light">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <h2>Изменения начинаются здесь</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <p>
              <ul>
              <li>2&nbsp;месяца, 8&nbsp;мастер-классов</li>
              <li>обучающие материалы в&nbsp;комплекте</li>
              </ul>
            </p>
          </div>
          <div class="col-sm-6">
            <p>
              <ul>
                <li>сопровождение консультанта-наставника</li>
                <li>проекты документов и&nbsp;регламентов</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row last-row">
        <div class="col">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="first-tab" data-toggle="tab" href="#first" role="tab" aria-controls="first" aria-selected="true">12&nbsp;февраля</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="second-tab" data-toggle="tab" href="#second" role="tab" aria-controls="second" aria-selected="false">26&nbsp;февраля</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="third-tab" data-toggle="tab" href="#third" role="tab" aria-controls="third" aria-selected="false">5&nbsp;марта</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="fourth-tab" data-toggle="tab" href="#fourth" role="tab" aria-controls="fourth" aria-selected="false">12&nbsp;марта</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="fifth-tab" data-toggle="tab" href="#fifth" role="tab" aria-controls="fifth" aria-selected="false">19&nbsp;марта</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="sixth-tab" data-toggle="tab" href="#sixth" role="tab" aria-controls="sixth" aria-selected="false">2&nbsp;апреля</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="seventh-tab" data-toggle="tab" href="#seventh" role="tab" aria-controls="seventh" aria-selected="false">9&nbsp;апреля</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="eighth-tab" data-toggle="tab" href="#eighth" role="tab" aria-controls="eighth" aria-selected="false">16&nbsp;апреля</a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="first" role="tabpanel" aria-labelledby="first-tab">
              <div class="card">
                <h5 class="card-header">Выявляем ограничения, препятствующие развитию компании</h5>
                <div class="card-body">
                  <p class="card-text">
                    Овладеваем методикой исследования проблем, с&nbsp;которыми сталкивается компания. Осваиваем практику проведения мозговых штурмов, &laquo;включаем коллективный разум&raquo;.
                  </p>
                  <h5 class="card-title">Мастер-класс: &laquo;Анализ ограничений, определение ключевых проблем&raquo;.</h5>
                  <p class="card-text">
                    <strong>Шаблоны:</strong>
                    <ul>
                      <li>Методика проведения мозгового штурма.</li>
                      <li>Чек-лист по&nbsp;проблемам компании.</li>
                      <li>Методика построения карты проблемной области.</li>
                    </ul>
                  </p>
                  <h5 class="card-title">Практическая задача для команды:</h5>
                  <p class="card-text">
                    Провести мозговой штурм и&nbsp;разработать карту проблемной области компании.
                  </p>
                  <h5 class="card-title">Разбор результатов с&nbsp;наставником:</h5>
                  <p class="card-text">
                    Исправление ошибок, дополнение карты проблем, внесение уточнений.
                  </p>
                  <h5 class="card-title">Результат:</h5>
                  <p class="card-text">
                    Наглядное описание проблемной области, в&nbsp;которой находится компания, ясное понимание ключевых проблем и&nbsp;последовательности их&nbsp;решения.
                  </p>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="second" role="tabpanel" aria-labelledby="second-tab">
              <div class="card">
                <h5 class="card-header">Определяем стратегию компании</h5>
                <div class="card-body">
                  <p class="card-text">
                    Находим ответ на&nbsp;главный вопрос стратегии: &laquo;Что необходимо предпринять для построения устойчивых конкурентных преимуществ&raquo;?
                  </p>
                  <h5 class="card-title">Мастер-класс: &laquo;Разработка стратегии развития конкурентных преимуществ компании&raquo;</h5>
                  <p class="card-text">
                    <strong>Шаблоны:</strong>
                    <ul>
                      <li>Чек-лист определения главной стратегической проблемы компании.</li>
                      <li>Шаблон плана развития конкурентных преимуществ.</li>
                    </ul>
                  </p>
                  <h5 class="card-title">Практическая задача для команды:</h5>
                  <p class="card-text">
                    Определить главную стратегическую проблему компании и&nbsp;разработать план ее&nbsp;преодоления, обеспечивающий достижение принципиально нового уровня конкурентоспособности компании.
                  </p>
                  <h5 class="card-title">Разбор результатов с&nbsp;наставником:</h5>
                  <p class="card-text">
                    Анализ стратегических решений, разработанных управленческой командой, разбор сложных вопросов, внесение корректировок и&nbsp;уточнений в&nbsp;план компании.
                  </p>
                  <h5 class="card-title">Результат:</h5>
                  <p class="card-text">
                    Стратегический план развития компании, обеспечивающий ей&nbsp;превосходство над конкурентами на&nbsp;целевых рынках.
                  </p>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="third" role="tabpanel" aria-labelledby="third-tab">
              <div class="card">
                <h5 class="card-header">Реформируем бизнес-процессы</h5>
                <div class="card-body">
                  <p class="card-text">
                    Находим и&nbsp;укрепляем &laquo;слабое звено&raquo; в&nbsp;цепи бизнес-процессов компании. Слабым звеном могут быть продажи, доставка товаров, разработка новых продуктов или другие процессы компании. Мы&nbsp;находим такие процессы и&nbsp;делаем их&nbsp;более результативными и&nbsp;эффективными.
                  </p>
                  <h5 class="card-title">Мастер-класс: &laquo;Практикум по&nbsp;проектированию и&nbsp;внедрению бизнес-процессов&raquo;</h5>
                  <p class="card-text">
                    <strong>Шаблоны:</strong>
                    <ul>
                      <li>Стандарт описания модели бизнес-процесса.</li>
                      <li>Шаблон плана проекта по&nbsp;совершенствованию бизнес-процесса.</li>
                    </ul>
                  </p>
                  <h5 class="card-title">Практическая задача для команды:</h5>
                  <p class="card-text">
                    Провести анализ бизнес-процесса, являющегося слабым звеном, разработать усовершенствованную модель и&nbsp;организовать внедрение новой модели процесса.
                  </p>
                  <h5 class="card-title">Разбор результатов с&nbsp;наставником:</h5>
                  <p class="card-text">
                    Анализ модели процесса, корректировка и&nbsp;уточнение описания бизнес-процесса. Разбор плана внедрения новой модели процесса и&nbsp;внесение изменений.
                  </p>
                  <h5 class="card-title">Результат:</h5>
                  <p class="card-text">
                    Усовершенствования модель бизнес-процесса и&nbsp;план ее&nbsp;внедрения.
                  </p>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="fourth" role="tabpanel" aria-labelledby="fourth-tab">
              <div class="card">
                <h5 class="card-header">Корректируем организационную структуру</h5>
                <div class="card-body">
                  <p class="card-text">
                    Проводим анализ действующей организационной структуры, выявляем слабые места и&nbsp;разрабатываем усовершенствованную структуру управления компанией.
                  </p>
                  <h5 class="card-title">Мастер-класс: &laquo;Совершенствование организационной структуры компании&raquo;</h5>
                  <p class="card-text">
                    <strong>Шаблоны:</strong>
                    <ul>
                      <li>Шаблон матрицы ответственности.</li>
                      <li>Набор типовых схем организационных структур.</li>
                    </ul>
                  </p>
                  <h5 class="card-title">Практическая задача для команды:</h5>
                  <p class="card-text">
                    Разработать матрицу ответственности, определяющую области ответственности структурных элементов компании в&nbsp;бизнес-процессах.<br>
                    Внести коррективы в&nbsp;организационную структуру по&nbsp;результатам анализа матрицы ответственности.
                  </p>
                  <h5 class="card-title">Разбор результатов с&nbsp;наставником:</h5>
                  <p class="card-text">
                    Анализ матрицы ответственности, разбор сложных вопросов, внесение корректировок. Обсуждение вариантов усовершенствования организационной структуры.
                  </p>
                  <h5 class="card-title">Результат:</h5>
                  <p class="card-text">
                    Матрица ответственности, четко определяющая области ответственности руководителей подразделений и&nbsp;ключевых специалистов в&nbsp;бизнес-процессах компании.<br>
                    План проведения изменений в&nbsp;организационной структуре компании.
                  </p>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="fifth" role="tabpanel" aria-labelledby="fifth-tab">
              <div class="card">
                <h5 class="card-header">Организуем целевое управление</h5>
                <div class="card-body">
                  <p class="card-text">
                    Разрабатываем систему целевых показателей, направляющих действия сотрудников на&nbsp;достижение целей компании.
                  </p>
                  <h5 class="card-title">Мастер-класс: &laquo;Разработка и&nbsp;внедрение системы показателей KPI&raquo;</h5>
                  <p class="card-text">
                    <strong>Шаблоны:</strong>
                    <ul>
                      <li>Шаблон спецификации бизнес-процесса, включающей цели и&nbsp;показатели процессов.</li>
                      <li>Шаблон должностных обязанностей и&nbsp;KPI сотрудников.</li>
                    </ul>
                  </p>
                  <h5 class="card-title">Практическая задача для команды:</h5>
                  <p class="card-text">
                    Разработать по&nbsp;методике iTeam систему показателей KPI.
                  </p>
                  <h5 class="card-title">Разбор результатов с&nbsp;наставником:</h5>
                  <p class="card-text">
                    Анализ системы KPI, разбор сложных вопросов, внесение корректировок и&nbsp;дополнений.
                  </p>
                  <h5 class="card-title">Результат:</h5>
                  <p class="card-text">
                    Система показателей KPI для определенной должностной позиции.
                  </p>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="sixth" role="tabpanel" aria-labelledby="sixth-tab">
              <div class="card">
                <h5 class="card-header">Преобразуем корпоративную культуру</h5>
                <div class="card-body">
                  <p class="card-text">
                    Определяем, какие негативные ценности ограничивают результативность и&nbsp;эффективность компании. Разрабатываем меры культивирования позитивных ценностей.
                  </p>
                  <h5 class="card-title">Мастер-класс: &laquo;Трансформация корпоративной культуры&raquo;</h5>
                  <p class="card-text">
                    <strong>Шаблоны:</strong>
                    <ul>
                      <li>Чек-лист корпоративных ценностей.</li>
                      <li>Шаблон оценки корпоративных ценностей.</li>
                    </ul>
                  </p>
                  <h5 class="card-title">Практическая задача для команды:</h5>
                  <p class="card-text">
                    Провести исследование корпоративных ценностей, определить негативные ценности, разработать план преобразования корпоративных ценностей.
                  </p>
                  <h5 class="card-title">Разбор результатов с&nbsp;наставником:</h5>
                  <p class="card-text">
                    Анализ корпоративных ценностей, разбор сложных вопросов, внесение корректировок и&nbsp;дополнений в&nbsp;план мероприятий.
                  </p>
                  <h5 class="card-title">Результат:</h5>
                  <p class="card-text">
                    Результаты оценки корпоративной культуры и&nbsp;план преобразования корпоративных ценностей.
                  </p>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="seventh" role="tabpanel" aria-labelledby="seventh-tab">
              <div class="card">
                <h5 class="card-header">Формируем управленческую команду</h5>
                <div class="card-body">
                  <p class="card-text">
                    Создаем механизмы эффективной работы управленческой команды. Внедряем практики, повышающие производительность и&nbsp;результативность коллективной работы управленцев.
                  </p>
                  <h5 class="card-title">Мастер-класс: &laquo;Формирование эффективной управленческой команды&raquo;</h5>
                  <p class="card-text">
                    <strong>Шаблоны:</strong>
                    <ul>
                      <li>Чек-лист контроля практик, формирующих управленческую команду.</li>
                      <li>Шаблон регламента работы управленческой команды.</li>
                    </ul>
                  </p>
                  <h5 class="card-title">Практическая задача для команды:</h5>
                  <p class="card-text">
                    Разработать и&nbsp;внедрить регламент работы управленческой команды. Разработать план внедрения практик эффективной работы команды.
                  </p>
                  <h5 class="card-title">Разбор результатов с&nbsp;наставником:</h5>
                  <p class="card-text">
                    Анализ плана и&nbsp;результатов внедрения, разбор сложных вопросов, внесение корректив и&nbsp;дополнений.
                  </p>
                  <h5 class="card-title">Результат:</h5>
                  <p class="card-text">
                    Действующий регламент работы управленческой команды и&nbsp;план внедрения практик эффективной работы команды.
                  </p>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="eighth" role="tabpanel" aria-labelledby="eighth-tab">
              <div class="card">
                <h5 class="card-header">Вырабатываем план проведения изменений</h5>
                <div class="card-body">
                  <p class="card-text">
                    Подводим итоги работы, проделанной в&nbsp;ходе Марафона и&nbsp;формируем комплексный план проведения изменений, направленных на&nbsp;улучшение управляемости и&nbsp;повышение эффективности компании.
                  </p>
                  <h5 class="card-title">Мастер-класс: &laquo;Планирование организационных изменений&raquo;</h5>
                  <p class="card-text">
                    <strong>Шаблоны:</strong>
                    <ul>
                      <li>Матрица развертывания изменений.</li>
                      <li>Шаблон тактического плана.</li>
                    </ul>
                  </p>
                  <h5 class="card-title">Практическая задача для команды:</h5>
                  <p class="card-text">
                    Разработать матрицу развертывания организационных изменений по&nbsp;методике iTeam и&nbsp;определить приоритетные направления преобразований.<br>
                    Разработать план проведения организационных изменений. 
                  </p>
                  <h5 class="card-title">Разбор результатов с&nbsp;наставником:</h5>
                  <p class="card-text">
                    Доработка, уточнение и&nbsp;дополнение тактического плана организационных изменений.
                  </p>
                  <h5 class="card-title">Результат:</h5>
                  <p class="card-text">
                    Комплексный план проведения изменений, направленных на&nbsp;улучшение управляемости и&nbsp;повышение эффективности компании.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row last-row">
        <div class="col">
          <div class="card">
            <h3 class="card-header">Видимые улучшения в&nbsp;управляемости компанией за&nbsp;два месяца</h3>
            <div class="card-body">
              <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-9">
                  <p class="card-text">
                    <ul>
                      <li>Слабые места компании <span class="text-danger">найдены</span></li>
                      <li>Рычаги для внедрения изменений <span class="text-danger">определены</span></li>
                      <li>Дорожная карта изменения <span class="text-danger">создана</span></li>
                      <li>Ваша управленческая команда <span class="text-danger">эффективна</span></li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row text-center">
        <div class="col">
          <h2>Я учавствую!</h2>
        </div>
      </div>
      <div class="row last-row text-center">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-header bg-dark text-light">
              <span class="lead">Название продукта</span>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">описание</li>
              <li class="list-group-item">описание</li>
              <li class="list-group-item">описание</li>
            </ul>
            <div class="card-body">
              <h2><span class="badge badge-dark">Бесплатно</span></h2>
              <a href="#" class="btn btn-danger btn-lg">ЗАРЕГИСТРИРОВАТЬСЯ</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-header bg-danger text-light">
              <span class="lead">Название продукта</span>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">описание</li>
              <li class="list-group-item">описание</li>
              <li class="list-group-item">описание</li>
            </ul>
            <div class="card-body">
              <h2><span class="badge badge-primary">6&thinsp;400&nbsp;&#8381;</span></h2>
              <Payment
                WMI_PAYMENT_AMOUNT="1"
                WMI_DESCRIPTION="iTeam"
                WMI_SUCCESS_URL="https://iteam.ru/promo/marafon"
                WMI_FAIL_URL="https://iteam.ru/promo/marafon"
                campaign_token="nIGYh"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="row text-center">
        <div class="col">
          <h2>FAQ</h2>
        </div>
      </div>
      <div class="row last-row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Вопрос 1</a>
                    <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Вопрос 2</a>
                    <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Вопрос 3</a>
                    <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Вопрос 4</a>
                  </div>
                </div>
                <div class="col-sm-9">
                  <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">1</div>
                    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">2</div>
                    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">3</div>
                    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">4</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row text-center">
        <div class="col">
          <h2>Дополнительно&nbsp;&mdash; конференция в&nbsp;Анапе для участников!</h2>
        </div>
      </div>
      <div class="row last-row text-center">
        <div class="col">
          <p><a href="#" class="btn btn-danger">ПОДРОБНЕЕ</a></p>
        </div>
      </div>

    </div>
  </div>
</template>

<script src="./home.js"></script>

<style scoped>
.last-row {
  margin-bottom: 50px;
}
h2 {
  margin-bottom: 20px;
}
.jumbotron {
  background-image: url("../assets/bg.jpg");
  background-size: cover;
}
.container-fluid {
  padding: 20px 10px;
  margin-bottom: 50px;
}
</style>
