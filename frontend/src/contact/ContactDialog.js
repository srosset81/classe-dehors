import React from 'react';
import { Button, useNotify, required } from 'react-admin';
import { Dialog, DialogTitle, DialogContent, DialogActions, makeStyles, TextField } from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(() => ({
  title: {
    paddingBottom: 8
  },
  actions: {
    padding: 15
  },
  addForm: {
    paddingTop: 0
  },
  listForm: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    maxHeight: 210
  }
}));

const FinalFormTextField = ({ input: { name, onChange, value, ...restInput }, meta, ...rest }) => (
  <TextField
    {...rest}
    name={name}
    helperText={meta.touched ? meta.error : undefined}
    error={meta.error && meta.touched}
    inputProps={restInput}
    onChange={onChange}
    value={value}
  />
);

const ContactDialog = ({ user, emailPredicate, open, onClose }) => {
  const classes = useStyles();
  const notify = useNotify();

  const onSubmit = async values => {
    const result = await fetch(process.env.REACT_APP_MIDDLEWARE_URL + '_mailer/contact-user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userUri: user['@id'] || user.id, emailPredicate, ...values })
    });

    if( result.ok ) {
      onClose();
      notify('Votre message a bien été envoyé', 'success');
    } else {
      notify('Erreur lors de votre envoi de message', 'error');
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <Dialog fullWidth open={open} onClose={onClose}>
            <DialogTitle className={classes.title}>Contacter {user['pair:label']}</DialogTitle>
            <DialogContent className={classes.addForm}>
              <Field name="name" component={FinalFormTextField} label="Votre nom" variant="filled" margin="dense" fullWidth validate={required('Champ requis')} />
              <Field name="email" component={FinalFormTextField} label="Votre adresse mail" variant="filled" margin="dense" fullWidth validate={required('Champ requis')} />
              <Field name="title" component={FinalFormTextField} label="Objet" variant="filled" margin="dense" fullWidth validate={required('Champ requis')} />
              <Field name="content" component={FinalFormTextField} label="Message" variant="filled" margin="dense" fullWidth multiline rows={7} validate={required('Champ requis')} />
            </DialogContent>
            <DialogActions className={classes.actions}>
              <Button label="ra.action.close" variant="text" onClick={onClose} />
              <Button type="submit" label="Envoyer" variant="contained" endIcon={<SendIcon />} onClick={() => form.submit()} disabled={submitting || pristine} />
            </DialogActions>
          </Dialog>
        </form>
      )}
    />
  );
};

export default ContactDialog;
