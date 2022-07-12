import * as React from 'react';

import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
//import {SwipeableTextMobileStepper} from '../components/stepped';

function Home() {
  let styles = {
    black : '#212121',
    white : '#fafafa',
    yellowLight : '#fffde7',
    yellow : '#ffc400',
  }

  return (
    <>
    <Toolbar  sx={{'background-color':styles.black, '@media all': {minHeight: 700,} }}>
      <Box sx={{ width: '100%' }}>
      <Grid container>
        <Grid item xs={6}>
          <font color={styles.yellowLight}>
            <h1>
              Есть вопросы по товару?
            </h1>
            <h4>
            Мы поможем Вам подобрать товар или ответим на вопросы,<br/>
            которые Вас интересуют!
            </h4>
          </font>
        </Grid>
        <Grid item xs={6}>
        <Typography    variant="h3" color={styles.yellowLight} component="div" sx={{ flexGrow: 1 }}>
              Тут сделать форму для оставки номера!!!! (либо свои контакты)
        </Typography>
        </Grid>
      </Grid>
    </Box>
    </Toolbar>

  <Toolbar sx={{ 'background-color':styles.yellowLight, '@media all': {minHeight: 400,} }}>
  <Box sx={{ width: '100%' }}>
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={3}> <h2>Цены ниже рыночных</h2></Grid>
    <Grid item xs={3}> <h2>Работаем в крупнейших<br/> маркетплейсах России</h2></Grid>
    <Grid item xs={3}> <h2>Возврат товара,<br/>в случае дефектов</h2></Grid>
    <Grid item xs={3}> <h2>Доставка по всей стране</h2></Grid>
  </Grid>
  </Box>
  </Toolbar>
    
  <Toolbar sx={{ 'background-color':styles.yellow, '@media all': {minHeight: 300,} }}>
    <Typography    variant="h3" component="div" sx={{ flexGrow: 1 }}><b>
              Покупайте качественные запчасти<br/> прямо сейчас!</b>
    </Typography>
    <Button sx={{'background-color':styles.black,  fontSize: 35, 'border-radius': '15px'}} variant="contained" href="/shop">
  Перейти в магазин
</Button>
  </Toolbar>

  <Toolbar sx={{ 'background-color':styles.yellowLight, '@media all': {minHeight: 500}, 'justifyContent':"center"}}>
  <div>
  <h1>Товар проверяется на:</h1>
  <h3>
    <ul>
      <li>Оригинальность</li>
      <li>Целостность товара и упаковки</li>
      <li>хз</li>
      <li>хз</li>
    </ul></h3>
  </div>

  </Toolbar>

  <Toolbar sx={{ 'background-color':styles.yellowLight, '@media all': {minHeight: 400} }}>
  <h1>С нами просто и безопасно</h1>
  </Toolbar>


  <Toolbar sx={{ 'background-color':styles.yellow, '@media all': {minHeight: 500,} }}>
    <div>
    <Typography    variant="h2" component="div" sx={{ flexGrow: 1}}>
              Мы в маркетплейсах:
    </Typography> <br/>
    <Button sx={{fontSize: 35, 'border-radius': '15px', 'border-width': '5px'}} variant="outlined" href="/shop">
  Ozon
</Button></div>
  </Toolbar>

  <Toolbar  sx={{'background-color':styles.black, '@media all': {minHeight: 700,} }}>
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
          <font color={styles.yellowLight}>
            <h1>
              Контакты
            </h1>
            <h5> <a href="tel:+8(925)607-65-44" >
            +8(925)607-65-44</a>
            </h5>
            <h5> <a href="xzxzxz" >
            xz@xz</a>
            </h5>
            <h5>
              График работы: ежедневно <br/> с 8 до 18
            </h5> <br/>
            <h1>
            Способы оплаты
            </h1>
            <div>
            <img src='../icon/mir.png' width="60" height="30" alt="mir"/>
            <img src='../icon/visa.jpg' width="60" height="30" alt="visa"/>
            <img src='../icon/mastercard.png' width=" " height="40" alt="mastercard"/>
            </div>
          </font>
        </Grid>
        <Grid item xs={3}>
        <font color={styles.yellowLight}>
            <h1>
              Доставка
            </h1>
            <h5>
            <b><i>Москва</i></b> (в пределах МКАД)- в течение рабочего дня
            </h5>
            <h5>
            <b><i>Московская область</i></b> - 1-2 дня
            </h5>
            <h5>
            <h5>
            <b><i>Липецк</i></b> - 1-3 дня
            </h5>
            <h5>
            <b><i>Липецкая область</i></b> - 1-4 дня
            </h5>
            <b><i>Все регионы России</i></b> -  «Почты России», крупнейших транспортных компаний, курьерскими службами DPD, СДЭК, пункты выдачи Pickpoint, Boxberry
            </h5>
          </font>
        </Grid>

        <Grid item xs={3}>
        <font color={styles.yellowLight}>
            <h1>
              О компании
            </h1>
            <h5>
              Партнерство:
            </h5>
            <h5>
              <a href="https">
              Мы на ozon</a>
            </h5>
            <h5>
              <a href="https">
              Мы на ozon</a>
            </h5>

          </font>
        </Grid>

        <Grid item xs={3}>
        <font color={styles.yellowLight}>
            <h1>
              Гарантии
            </h1>
            <h5>
              <a href="/">
              Условия обмена и возврата <br/>вы можете прочитать здесь</a>
            </h5>
          </font>
        </Grid>

      </Grid>
    </Box>
    </Toolbar>


</>
  );
}

export default Home;