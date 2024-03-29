import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  card: {
    marginTop: '40px',
    boxShadow: 'none',
    width: '90%',
    display: 'flex'
  },
  media: {
    borderRadius: '100%',
    height: '150px',
    width: '150px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  CardAction: {
    paddingTop: '20px',
    textAlign: 'center',
    '&:hover': {
      background: '#eeeeee'
    }
  }
});

export default function ImageCard() {
  const classes = useStyles();

  return (
    <div
      style={{
        minHeight: '95vh',
        width: 'auto',
        display: 'flex',
        padding: 0,
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Grid
        container
        direction="row"
        justify="space-around"
        style={{ marginTop: 'auto', marginBottom: 'auto' }}
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          md={4}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Card className={classes.card}>
            <div className={classes.CardAction}>
              <CardMedia
                className={classes.media}
                image="/zena.jpeg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  align="center"
                >
                  Сара Ј.
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Сите ја сакаме природата на некој начин зар не?
                  <br></br> На пример, некои ја сакаат природата за своето бујно
                  зеленило, прекрасна убавина и некои ја сакаат за своите
                  подароци, како што се билки и грмушки. Со други зборови,
                  природата ни дава многу работи во изобилство за да можеме да
                  живееме исполнет живот.
                </Typography>
              </CardContent>
            </div>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          spacing={3}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Card className={classes.card}>
            <div className={classes.CardAction}>
              <CardMedia
                className={classes.media}
                image="/zena2.jpeg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  align="center"
                >
                  Елена В.
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Човечките суштества непрестајно се вклучени во активности како
                  фрлање отпадоци било каде, сечење дрвја, испуштање отровни
                  гасови во атмосферата, загадуваат реки, итн. Затоа ве
                  повикуваме и приклучете се во оваа голема акција против
                  ѓубрето!
                </Typography>
              </CardContent>
            </div>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          spacing={3}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Card className={classes.card}>
            <div className={classes.CardAction}>
              <CardMedia
                className={classes.media}
                image="/maz.jpeg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  align="center"
                >
                  Стефан С.
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <p>
                    Сега се поставува прашањето како можеме да направиме промена
                    на нашите активности што би не воделе кон подобро утре? Па,
                    нема да бара многу од вас. Приклучете се на оваа акција,
                    пријавете бидете дел од подоброто утре. НЕ БИДИ ЃУБРЕ!
                  </p>
                </Typography>
              </CardContent>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
