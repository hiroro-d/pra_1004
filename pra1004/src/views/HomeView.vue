<template>
  <div class="home">
    <p :class="$style.test">テスト</p>
    <HeaderComp></HeaderComp>
    <main>
      <section id="mv" class="animate__animated animate__fadeInUp">
        <!-- <img id="mv__media" src="/images/menu10.jpg" alt=""> -->
        <video id="mv__media" src="/images/mov_sns.mp4" autoplay muted playsinline loop></video>
        <h2 class="mv__ttl">Welcome to<br>Cafe Du Ando</h2>
        <p class="mv__txt">大山の天然水で淹れるコーヒーをお楽しみください！</p>
      </section><!-- /#mv -->

      <section id="lead" class="content__sec">
        <div class="mv__subimg"><img src="/images/menu13.jpg" alt=""></div>
        <h2 class="ttl">Lead</h2>
        <div class="mov__wrapper">
          <div class="container">
            <video src="/images/mov_sns.mp4" controls autoplay muted playsinline></video>
          </div>
        </div>
        <div class="lead__wrapper">
          <div class="lead__left lead__left__01">
            <img src="/images/menu1.jpg" alt="">
          </div><!-- /.lead__left -->
          <div class="lead__right">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odio incidunt, voluptatem sapiente earum, aut cupiditate ducimus ad vero harum nostrum cumque saepe assumenda perspiciatis! Nihil fugiat repellat alias asperiores.</p>
          </div><!-- /.lead__right -->
        </div><!-- /.lead__wrapper -->
        <div class="lead__wrapper lead__wrapper--reverse">
          <div class="lead__left lead__left__02">
            <img src="/images/menu2.jpg" alt="">
          </div><!-- /.lead__left -->
          <div class="lead__right">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odio incidunt, voluptatem sapiente earum, aut cupiditate ducimus ad vero harum nostrum cumque saepe assumenda perspiciatis! Nihil fugiat repellat alias asperiores.</p>
          </div><!-- /.lead__right -->
        </div><!-- /.lead__wrapper -->
      </section><!--lead-->
      <section id="grid">
        <h2 class="ttl">Grid</h2>
        <ul class="grid__container">
          <li class="big__grid"><img src="/images/menu1.jpg" alt=""></li>
          <li><img src="/images/menu2.jpg" alt=""></li>
          <li><img src="/images/menu3.jpg" alt=""></li>
          <li><img src="/images/menu4.jpg" alt=""></li>
          <li><img src="/images/menu5.jpg" alt=""></li>
          <li><img src="/images/menu6.jpg" alt=""></li>
          <li><img src="/images/menu7.jpg" alt=""></li>
          <li><img src="/images/menu8.jpg" alt=""></li>
          <li><img src="/images/menu9.jpg" alt=""></li>
          <li><img src="/images/menu10.jpg" alt=""></li>
          <li><img src="/images/menu11.jpg" alt=""></li>
          <li><img src="/images/menu12.jpg" alt=""></li>

        </ul>
      </section>
      <section id="position">
        <div class="container">
          <h2 class="ttl">Position</h2>
          <div class="posi__box__wrapper">
            <div class="posi__box posi__box__01">BOX1</div>
            <div class="posi__box posi__box__02">BOX2</div>
            <div class="posi__box posi__box__03">BOX3</div>
          </div><!-- /.posi__box__wrapper -->
          <div class="posi__box__wrapper">
            <div class="posi__box posi__box__04">BOX4</div>
            <div class="posi__box posi__box__05">BOX5</div>
            <div class="posi__box posi__box__06">BOX6</div>
          </div><!-- /.posi__box__wrapper -->

        </div><!--container-->
      </section><!--position-->
      <section id="menu" class="content__sec">
        <div class="container">
          <h2 class="ttl">Menu</h2>
          <ul class="menu__list">
            <li>
              <a href="#">
                <p><img src="/images/menu3.jpg" alt=""></p>
                <div class="menu__inner">
                  <h3 class="menu__ttl">ブレンドコーヒー</h3>
                  <p class="menu__txt">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div><!-- /.menu__inner -->
              </a>
            </li>
            <li>
              <a href="#">
                <p><img src="/images/menu4.jpg" alt=""></p>
                <div class="menu__inner">
                  <h3 class="menu__ttl">ブレンドコーヒー</h3>
                  <p class="menu__txt">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div><!-- /.menu__inner -->
              </a>
            </li>
            <li>
              <a href="#">
                <p><img src="/images/menu5.jpg" alt=""></p>
                <div class="menu__inner">
                  <h3 class="menu__ttl">ブレンドコーヒー</h3>
                  <p class="menu__txt">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div><!-- /.menu__inner -->
              </a>
            </li>
            <li>
              <a href="#">
                <p><img src="/images/menu6.jpg" alt=""></p>
                <div class="menu__inner">
                  <h3 class="menu__ttl">ブレンドコーヒー</h3>
                  <p class="menu__txt">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div><!-- /.menu__inner -->
              </a>
            </li>
            <li>
              <a href="#">
                <p><img src="/images/menu6.jpg" alt=""></p>
                <div class="menu__inner">
                  <h3 class="menu__ttl">ブレンドコーヒー</h3>
                  <p class="menu__txt">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div><!-- /.menu__inner -->
              </a>
            </li>
          </ul>
        </div><!--container-->
      </section>
      <section id="accordion">
        <div class="container">
          <h2 class="ttl">Accordion</h2>
          <div class="acc__wrapper">
            <input id="tab__01" type="radio" name="accodion" class="trigger" checked>
            <label for="tab__01" class="tab__label">アコーディオン１</label>
            <div class="contents">
              <h3>コンテンツタイトル</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, minima. Molestiae, iure reiciendis sequi accusantium ipsum quae odit. Fuga totam magni distinctio nam a, voluptatibus consectetur libero accusamus tempora optio?</p>
            </div><!--contents-->
          </div><!--acc__wrapper-->
          <div class="acc__wrapper">
            <input id="tab__02" type="radio" name="accodion" class="trigger">
            <label for="tab__02" class="tab__label">アコーディオン２</label>
            <div class="contents">
              <h3>コンテンツタイトル</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, minima. Molestiae, iure reiciendis sequi accusantium ipsum quae odit. Fuga totam magni distinctio nam a, voluptatibus consectetur libero accusamus tempora optio?</p>
            </div><!--contents-->
          </div>
          <div class="acc__wrapper">
            <input id="tab__03" type="radio" name="accodion" class="trigger">
            <label for="tab__03" class="tab__label">アコーディオン３</label>
            <div class="contents">
              <h3>コンテンツタイトル</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, minima. Molestiae, iure reiciendis sequi accusantium ipsum quae odit. Fuga totam magni distinctio nam a, voluptatibus consectetur libero accusamus tempora optio?</p>
            </div><!--contents-->
          </div>
        </div>
      </section>
      <section id="access">
        <div class="container">
          <h2 class="ttl">Access</h2>
          <div class="map__wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.6711460985102!2d135.49019701505466!3d34.68824838043777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e6896e500001%3A0x3ed92fc6846afcd3!2z5Ym16YCg56S-44Oq44Kr44Os44Oz44OI44K544Kv44O844OrIOWkp-mYquagoQ!5e0!3m2!1sja!2sjp!4v1662085825094!5m2!1sja!2sjp" width="800" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div><!-- /.map__wrapper -->
          <div class="map__wrapper">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/tNnAJgbGvw8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </section>

      <section id="tbl">
        <div class="container">
          <h2 class="ttl">Table</h2>
          <div class="tbl__wrapper">
            <table class="tbl__01">
              <tr>
                <th>見出しセル</th>
                <td>Lorem ipsum dolor sit amet<br> consectetur adipisicing elit. </td>
                <td>データデータ</td>
                <td>データデータ</td>
                <td>データデータデータデータデータデータデータデータ</td>
              </tr>
              <tr>
                <th>見出しセル</th>
                <td>Lorem ipsum dolor sit amet<br> consectetur adipisicing elit. </td>
                <td>データデータ</td>
                <td>データデータ</td>
                <td>データデータデータデータデータデータデータデータ</td>
              </tr>
              <tr>
                <th>見出しセル</th>
                <td>Lorem ipsum dolor sit amet<br> consectetur adipisicing elit. </td>
                <td>データデータ</td>
                <td>データデータ</td>
                <td>データデータデータデータデータデータデータデータ</td>
              </tr>
            </table>
          </div><!--tbl__wppapper-->

          <table class="tbl__02">
            <thead>
              <tr>
                <th>見出し</th>
                <th>見出し</th>
                <th>見出し</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>本文本文本文本文<br>本文本文本文本文</td>
                <td>本文本文本文本文<br>本文本文本文本文</td>
                <td>本文本文本文本文<br>本文本文本文本文</td>
              </tr>
              <tr>
                <td>本文本文本文本文<br>本文本文本文本文</td>
                <td>本文本文本文本文<br>本文本文本文本文<br>本文本文本文本文<br>本文本文本文本文<br>本文本文本文本文<br>本文本文本文本文</td>
                <td>本文本文本文本文<br>本文本文本文本文</td>
              </tr>
              <tr>
                <td>本文本文本文本文<br>本文本文本文本文</td>
                <td>本文本文本文本文<br>本文本文本文本文</td>
                <td>本文本文本文本文<br>本文本文本文本文</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="contact">
        <div class="container">
          <h2 class="ttl">Contact</h2>
          <div class="input__box">
            <label for="name">氏名：</label>
            <input type="text" placeholder="氏名">
          </div><!--input__box-->
          <div class="input__box input__box__radio">
            <label><input type="radio" name="gender">男</label>
            <label><input type="radio" name="gender">女</label>
          </div><!--input__box-->
          <div class="input__box">
            <label for="tel">携帯電話番号：</label>
            <input id="tel" type="text" placeholder="携帯電話番号">
          </div><!--input__box-->
          <div class="input__box">
            <label for="biko">備考</label>
            <textarea name="" id="biko" cols="30" rows="6"></textarea>
          </div>
          <div class="btn__box">
            <input type="submit" value="送信" class="btn">
          </div>
          <div class="btn__box">
            <button class="btn"><span class="btn__box__txt">入力内容を確認して</span>送信</button>
          </div>
        </div>
      </section>
    </main>
    <FooterComp></FooterComp>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
}
</script>


<style>
  .test {
    color: yellow;
  }
</style>

<style module>
  .test {
    color: yellowgreen;
  }
</style>
