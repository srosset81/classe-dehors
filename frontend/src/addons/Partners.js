import React from 'react';
import { Grid, Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  logo: {
    maxWidth: 180,
    maxHeight: 180,
    [theme.breakpoints.down('xs')]: {
      maxWidth: 150,
      maxHeight: 150
    }
  }
}));

const partners = {
  'cemea.jpg': 'https://www.cemea.asso.fr',
  'fee.png': 'https://faire-ecole.org',
  'fcpn.png': 'https://www.fcpn.org',
  'ligue-enseignement.png': 'https://laligue.org',
  'profs-en-transition.jpg': 'https://profsentransition.com',
  'frene.jpg': 'https://frene.org',
  'tiers-lieux-edu.jpg': 'https://www.tierslieuxedu.org',
  'graines-oc.png': 'https://www.grainepc.org',
  'agirpe.png': 'https://www.agirpourlenvironnement.org',
  'rfve.jpg': 'https://rfve.fr',
  'tdf.png': 'https://www.tousdehors.fr',
  'av.png': 'https://virtual-assembly.org',
};

const Partners = () => {
  const classes = useStyles();
  return (
    <Grid container>
      {Object.entries(partners).map(([key, url]) => (
        <Grid item xs={6} sm={3} key={key}>
          <Box
            display="flex"
            height={200}
            alignItems="center"
            justifyContent="center"
          >
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img className={classes.logo} src={'/partners/' + key} alt="" />
            </a>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default Partners;