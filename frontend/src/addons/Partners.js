import React from 'react';
import { Grid, Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  logo: {
    // width: '100%',
    maxWidth: 200,
    maxHeight: 200,
    align: 'center'
  }
}));

const partners = {
  // 'av': 'L’Assemblée Virtuelle',
  'cemea.jpg': 'Les CEMEA',
  'fee.png': 'Faire Ecole Ensemble (Fée)',
  'fcpn.png': 'Fédération des clubs Connaître et protéger la nature (FCPN)',
  'ligue-enseignement.png': 'La Ligue de l’Enseignement',
  'profs-en-transition.jpg': 'Profs en transition',
  'frene.jpg': 'Réseau français d’éducation à la nature et à l’environnement (FRENE)',
  'tiers-lieux-edu.jpg': 'Tiers Lieux Edu',
  'graines-oc.png': 'Graine Poitou Charentes'
};

const Partners = () => {
  const classes = useStyles();
  return (
    <Grid container>
      {Object.entries(partners).map(([key, label]) => (
        <Grid item xs={3} key={key}>
          <Box
            display="flex"
            height={200}
            alignItems="center"
            justifyContent="center"
          >
            <img className={classes.logo} src={'/partners/' + key} alt={label} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default Partners;