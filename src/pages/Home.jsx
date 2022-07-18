import * as React from 'react';

import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
//import {SwipeableTextMobileStepper} from '../components/stepped';


function Home() {
  const styles = {
    black : '#212121',
    white : '#fafafa',
    yellowLight : '#fffde7',
    yellow : '#ffc400',
  }

  return (
    <>
    <Toolbar  sx={{backgroundColor:styles.black, '@media all': {minHeight: 700,} }}>
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

  <Toolbar sx={{ backgroundColor:styles.yellowLight, '@media all': {minHeight: 400,} }}>
  <Box sx={{ width: '100%' }}>
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={3}> <h2>Цены ниже рыночных</h2></Grid>
    <Grid item xs={3}> <h2>Работаем в крупнейших<br/> маркетплейсах России</h2></Grid>
    <Grid item xs={3}> <h2>Возврат товара,<br/>в случае дефектов</h2></Grid>
    <Grid item xs={3}> <h2>Доставка по всей стране</h2></Grid>
  </Grid>
  </Box>
  </Toolbar>
    
  <Toolbar sx={{ backgroundColor:styles.yellow, '@media all': {minHeight: 300,} }}>
    <Typography    variant="h3" component="div" sx={{ flexGrow: 1 }}><b>
              Покупайте качественные запчасти<br/> прямо сейчас!</b>
    </Typography>
    <Button sx={{backgroundColor:styles.black,  fontSize: 35, borderRadius: '15px'}} variant="contained" href="/shop">
  Перейти в магазин
</Button>
  </Toolbar>

  <Toolbar sx={{ backgroundColor:styles.yellowLight, '@media all': {minHeight: 500}, 'justifyContent':"center"}}>
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

  <Toolbar sx={{ backgroundColor:styles.yellowLight, '@media all': {minHeight: 400} }}>
  <h1>С нами просто и безопасно</h1>
  </Toolbar>


  <Toolbar sx={{ backgroundColor:styles.yellow, '@media all': {minHeight: 500,} }}>
    <div>
    <Typography    variant="h2" component="div" sx={{ flexGrow: 1}}>
              Мы в маркетплейсах:
    </Typography> <br/>
    <Button sx={{fontSize: 35, borderRadius: '15px', borderWidth: '5px'}} variant="outlined" href="/shop">
  Ozon
</Button></div>
  </Toolbar>

</>
  );
}

export default Home;