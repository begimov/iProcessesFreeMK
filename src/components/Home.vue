<template>
  <div>
    <div class="jumbotron jumbotron-fluid text-white">
      <div class="container">
        <div class="row">
          <div class="col"><img src="../assets/logo.png" class="logo" width="110"></div>
          <!-- <div class="col d-none d-md-block"><span class="badge badge-primary">2&nbsp;МЕСЯЦА</span></div>
          <div class="col d-none d-md-block text-center"><span class="badge badge-primary">ОНЛАЙН</span></div>
          <div class="col d-none d-md-block text-right"><span class="badge badge-primary">БЕСПЛАТНО</span></div>
          <div class="col d-md-none text-right">
            <p><span class="badge badge-primary">2&nbsp;МЕСЯЦА</span></p>
            <p><span class="badge badge-primary">ОНЛАЙН</span></p>
            <p><span class="badge badge-primary">БЕСПЛАТНО</span></p>
          </div> -->
        </div>
        <p class="header-title lead">Создайте систему управления компанией за&nbsp;8&nbsp;недель шаг за&nbsp;шагом</p>
        <h1 class="display-3 d-none d-sm-block"><strong>РУССКИЙ МЕНЕДЖМЕНТ<br>БИЗНЕС КАК СИСТЕМА</strong></h1>
        <h1 class="display-5 d-sm-none"><strong>РУССКИЙ МЕНЕДЖМЕНТ<br>БИЗНЕС КАК СИСТЕМА</strong></h1>
        <p class="lead header-date">Онлайн марафон для руководителей и&nbsp;собственников бизнеса</p>
        <p class="lead"><span class="badge badge-light">Старт 12&nbsp;февраля 2018 года</span></p>
        <a href="#" class="btn btn-danger btn-lg text-uppercase" @click.prevent="scrollMeTo('join-block')">Участвовать</a>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <img src="../assets/cloud.jpg" class="img-fluid">
        </div>
      </div>
    </div>

    <div class="container-fluid changes-block">
      <div class="container text-light">
        <div class="row">
          <div class="col text-center">
            <h2>Знакомо? Изменения начинаются здесь</h2>
          </div>
        </div>
        <div class="row last-row">
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

      <div class="container">
        <div class="row last-row">
          <div class="col">
            <ul class="nav nav-tabs nav-tabs-links" id="myTab" role="tablist">
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
                  <h5 class="card-header bg-white">Выявляем ограничения, препятствующие развитию компании</h5>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-8">
                        <h5 class="card-title">Мастер-класс: &laquo;Анализ ограничений, определение ключевых проблем&raquo;.</h5>
                        <p><span class="badge badge-dark">Участие бесплатно</span></p>
                        <p class="card-text">
                          Овладеваем методикой исследования проблем, с&nbsp;которыми сталкивается компания. Осваиваем практику проведения мозговых штурмов, &laquo;включаем коллективный разум&raquo;.
                        </p>
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
                      <div class="col-md-4">
                        <Ytplayer
                          video-id="rvPDs8yWT38"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="second" role="tabpanel" aria-labelledby="second-tab">
                <div class="card">
                  <h5 class="card-header bg-white">Определяем стратегию компании</h5>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-8">
                        <h5 class="card-title">Мастер-класс: &laquo;Разработка стратегии развития конкурентных преимуществ компании&raquo;</h5>
                        <p><span class="badge badge-dark">Участие бесплатно</span></p>
                        <p class="card-text">
                          Находим ответ на&nbsp;главный вопрос стратегии: &laquo;Что необходимо предпринять для построения устойчивых конкурентных преимуществ&raquo;?
                        </p>
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
                      <div class="col-md-4">
                        <Ytplayer
                          video-id="kZPnvfgMglY"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="third" role="tabpanel" aria-labelledby="third-tab">
                <div class="card">
                  <h5 class="card-header bg-white">Реформируем бизнес-процессы</h5>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-8">
                        <h5 class="card-title">Мастер-класс: &laquo;Практикум по&nbsp;проектированию и&nbsp;внедрению бизнес-процессов&raquo;</h5>
                        <p><span class="badge badge-dark">Участие бесплатно</span></p>
                        <p class="card-text">
                          Находим и&nbsp;укрепляем &laquo;слабое звено&raquo; в&nbsp;цепи бизнес-процессов компании. Слабым звеном могут быть продажи, доставка товаров, разработка новых продуктов или другие процессы компании. Мы&nbsp;находим такие процессы и&nbsp;делаем их&nbsp;более результативными и&nbsp;эффективными.
                        </p>
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
                      <div class="col-md-4">
                        <Ytplayer
                          video-id="kKbxIEdcj0E"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="fourth" role="tabpanel" aria-labelledby="fourth-tab">
                <div class="card">
                  <h5 class="card-header bg-white">Корректируем организационную структуру</h5>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-8">
                        <h5 class="card-title">Мастер-класс: &laquo;Совершенствование организационной структуры компании&raquo;</h5>
                        <p><span class="badge badge-dark">Участие бесплатно</span></p>
                        <p class="card-text">
                          Проводим анализ действующей организационной структуры, выявляем слабые места и&nbsp;разрабатываем усовершенствованную структуру управления компанией.
                        </p>
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
                      <div class="col-md-4">
                        <Ytplayer
                          video-id="4w-RREnLs2Y"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="fifth" role="tabpanel" aria-labelledby="fifth-tab">
                <div class="card">
                  <h5 class="card-header bg-white">Организуем целевое управление</h5>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-8">
                        <h5 class="card-title">Мастер-класс: &laquo;Разработка и&nbsp;внедрение системы показателей KPI&raquo;</h5>
                        <p><span class="badge badge-dark">Участие бесплатно</span></p>
                        <p class="card-text">
                          Разрабатываем систему целевых показателей, направляющих действия сотрудников на&nbsp;достижение целей компании.
                        </p>
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
                      <div class="col-md-4">
                        <Ytplayer
                          video-id="39WaU9B8IGI"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="sixth" role="tabpanel" aria-labelledby="sixth-tab">
                <div class="card">
                  <h5 class="card-header bg-white">Преобразуем корпоративную культуру</h5>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-8">
                        <h5 class="card-title">Мастер-класс: &laquo;Трансформация корпоративной культуры&raquo;</h5>
                        <p><span class="badge badge-dark">Участие бесплатно</span></p>
                        <p class="card-text">
                          Определяем, какие негативные ценности ограничивают результативность и&nbsp;эффективность компании. Разрабатываем меры культивирования позитивных ценностей.
                        </p>
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
                      <div class="col-md-4">
                        <Ytplayer
                          video-id="BuCa1Pm9Mi8"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="seventh" role="tabpanel" aria-labelledby="seventh-tab">
                <div class="card">
                  <h5 class="card-header bg-white">Формируем управленческую команду</h5>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-8">
                        <h5 class="card-title">Мастер-класс: &laquo;Формирование эффективной управленческой команды&raquo;</h5>
                        <p><span class="badge badge-dark">Участие бесплатно</span></p>
                        <p class="card-text">
                          Создаем механизмы эффективной работы управленческой команды. Внедряем практики, повышающие производительность и&nbsp;результативность коллективной работы управленцев.
                        </p>
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
                      <div class="col-md-4">
                        <Ytplayer
                          video-id="8hyvTRhczAU"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="eighth" role="tabpanel" aria-labelledby="eighth-tab">
                <div class="card">
                  <h5 class="card-header bg-white">Вырабатываем план проведения изменений</h5>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-8">
                        <h5 class="card-title">Мастер-класс: &laquo;Планирование организационных изменений&raquo;</h5>
                        <p><span class="badge badge-dark">Участие бесплатно</span></p>
                        <p class="card-text">
                          Подводим итоги работы, проделанной в&nbsp;ходе Марафона и&nbsp;формируем комплексный план проведения изменений, направленных на&nbsp;улучшение управляемости и&nbsp;повышение эффективности компании.
                        </p>
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
                      <div class="col-md-4">
                        <Ytplayer
                          video-id="WETG-r7XP5Q"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row last-row align-items-center">
        <div class="col-md-4">
          <img src="../assets/achievements.jpg" class="img-fluid" width="90%">
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-9"><h4 class="text-danger" style="margin-bottom:0; margin-top:20px;">Видимые улучшения</h4></div>
          </div>
          <div class="row text-right">
            <div class="col-9"><h5 style="margin-bottom:0;">в&nbsp;управляемости компанией</h5></div>
          </div>
          <div class="row text-center">
            <div class="col-9"><h2>за&nbsp;два месяца</h2></div>
          </div>
          <div class="row">
            <div class="col">
              <p><img src="../assets/check.svg">&nbsp;Слабые места компании <span class="text-success">найдены</span></p>
              <p><img src="../assets/check.svg">&nbsp;Рычаги для внедрения изменений <span class="text-success">определены</span></p>
              <p><img src="../assets/check.svg">&nbsp;Дорожная карта изменения <span class="text-success">создана</span></p>
              <p><img src="../assets/check.svg">&nbsp;Ваша управленческая команда <span class="text-success">эффективна</span></p>
            </div>
          </div>
        </div>
      </div>

      <div class="row text-center" ref="join-block">
        <div class="col" style="margin-top:30px">
          <h2>Я участвую!</h2>
        </div>
      </div>
      <div class="row last-row text-center">
        <div class="col">
          <Grform 
            campaign_token="ng5Lk"
          />
        </div>
      </div>

      <!-- <div class="row text-center" ref="join-block">
        <div class="col" style="margin-top:30px">
          <h2>Я участвую!</h2>
        </div>
      </div>
      <div class="row last-row text-center">
        
        <div class="col-lg-4">
          <div class="card">
            <div class="card-header bg-danger text-light">
              <span class="lead"><strong>ПАКЕТ &laquo;СУПЕРМАРАФОН&raquo;</strong></span><br>
              <span class="badge badge-warning" style="font-size: 0.8em;">Включает ПАКЕТ &laquo;МАРАФОН&raquo;</span><br>
              <span class="lead"><strong>+</strong></span>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Индивидуальное сопровождение управляющего партнера iTeam Александра Кочнева.</li>
              <li class="list-group-item">8&nbsp;консультаций в&nbsp;удобное для вас и&nbsp;вашей команды время после каждого мастер-класса, работа под руководством Наставника.</li>
              <li class="list-group-item">Результат&nbsp;&mdash; готовый эффективный план проведения изменений. Управляемая и&nbsp;эффективная компания.</li>
            </ul>
            <div class="card-body">
              <h2><span class="badge badge-primary">128&thinsp;000&nbsp;&#8381;</span></h2>
              <Payment
                WMI_PAYMENT_AMOUNT="128000"
                WMI_DESCRIPTION="iTeam"
                WMI_SUCCESS_URL="https://iteam.ru/promo/marafon/db"
                WMI_FAIL_URL="https://iteam.ru/promo/marafon/db"
                campaign_token="ng5PT"
                product_name="ПАКЕТ «СУПЕРМАРАФОН»"
              />
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card border-danger card-accent">
            <div class="card-header bg-danger text-light">
              <span class="lead"><strong>ПАКЕТ &laquo;МАРАФОН&raquo;</strong></span><br>
              <span class="badge badge-warning" style="font-size: 0.8em;">Включает ПАКЕТ &laquo;ЗРИТЕЛЬ&raquo;</span><br>
              <span class="lead"><strong>+</strong></span>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Записи мастер-классов и&nbsp;дополнительные материалы (презентация, шаблоны и&nbsp;проекты документов).</li>
              <li class="list-group-item">Материалы будут приходить на&nbsp;указанную вами почту еженедельно, по&nbsp;мере прохождения мастер-классов.</li>
            </ul>
            <div class="card-body">
              <p>8 комплектов материалов</p>
              <h2><span class="badge badge-primary">6&thinsp;400&nbsp;&#8381;</span></h2>
              <Payment
                WMI_PAYMENT_AMOUNT="6400"
                WMI_DESCRIPTION="iTeam"
                WMI_SUCCESS_URL="https://iteam.ru/promo/marafon/db"
                WMI_FAIL_URL="https://iteam.ru/promo/marafon/db"
                campaign_token="ng5u2"
                product_name="ПАКЕТ «МАРАФОН»"
              />
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card">
            <div class="card-header bg-dark text-light">
              <span class="lead"><strong>ПАКЕТ &laquo;ЗРИТЕЛЬ&raquo;</strong></span>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Участие во&nbsp;всех мастер-классах Марафона очно.</li>
              <li class="list-group-item">Самостоятельное выполнение заданий наставника.</li>
              <li class="list-group-item">Обсуждение вопросов и&nbsp;проблем в&nbsp;общей группе в&nbsp;социальных сетях.</li>
            </ul>
            <div class="card-body">
              <Grform 
                campaign_token="ng5Lk"
              />
            </div>
          </div>
        </div>
        
      </div> -->

      <!-- <div class="row text-center">
        <div class="col">
          <h2>FAQ</h2>
        </div>
      </div>
      <div class="row last-row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-4">
                  <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Какие методы оплаты доступны?</a>
                    <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Оплата на&nbsp;вашем сайте безопасна?</a>
                    <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Вы&nbsp;принимаете карты стран СНГ?</a>
                  </div>
                </div>
                <div class="col-sm-8">
                  <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                      <p>Мы&nbsp;осуществляем оплату с&nbsp;помощью платежного сервиса WalletOne. Вы&nbsp;можете оплатить продукт практически любым доступным сегодня способом. Все способы вы&nbsp;можете <a href="https://www.walletone.com/ru/merchant/payments/#country=RU&amp;section=cash" target="_blank">увидеть здесь.</a></p>
                    </div>
                    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                      <p>Wallet One использует стандарт безопасности PCI&nbsp;DSS, SSL-протокол, системы безопасности Verified by&nbsp;Visa и&nbsp;MasterCard SecureCode.</p>
                      <p><a href="https://www.walletone.com/ru/merchant/security/" target="_blank">Подробнее здесь</a></p>
                    </div>
                    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                      <p>Да, мы&nbsp;принимаем карты, выпущенные на&nbsp;территории Украины, Беларуси, Казахстана и&nbsp;ряда других стран. Список всех стран и&nbsp;вариантов оплаты можно <a href="https://www.walletone.com/ru/merchant/payments/#country=RU&amp;section=cash" target="_blank">увидеть по&nbsp;ссылке</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->

    </div>
  </div>
</template>

<script src="./home.js"></script>

<style scoped>
.header-title {
  margin-top: 30px;
}
.header-date {
  margin-top: 20px;
  margin-bottom: 10px;
}
.badge {
  font-size: 1.1em;
}
.last-row {
  margin-bottom: 50px;
}
h2 {
  margin-bottom: 20px;
}
.jumbotron {
  padding-top: 20px;
  background-image: url("../assets/bg.jpg");
  background-size: cover;
}
.container-fluid {
  padding: 20px 10px;
  margin-bottom: 50px;
}
.changes-block {
  background-image: url("../assets/bg_block_01.jpg");
  background-size: cover;
}
/* .anapa-block-bg {
  background-image: url("../assets/boni.png");
  background-repeat: no-repeat;
  background-size: contain;
  height: 300px;
}
.anapa-block {
  padding: 20px;
} */
.card-header-anapa {
  background-image: url("../assets/bg_block_anapa.jpg");
  background-size: cover;
  height: 200px;
  padding: 20px;
}
/* .achievements-container {
  background-image: url("../assets/achievements_bg.jpg");
  background-size: cover;
} */
.nav-tabs-links a {
  color: #fff;
  text-decoration: underline;
}
.logo {
  margin-bottom: 20px;
}
.card-accent {
  box-shadow: 0 0 20px rgba(0,0,0,0.3);
  border-width: 2px;
}


@media (max-width: 767.98px) {
  .header-title {
    margin-top: 20px;
  }
}
@media (max-width: 575.98px) {
  .header-title {
    margin-top: 10px;
  }
}
</style>
