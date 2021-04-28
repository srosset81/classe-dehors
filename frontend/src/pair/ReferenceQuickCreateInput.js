import React, { useState } from 'react';
import { useForm } from 'react-final-form';
import {
  required,
  Button,
  SaveButton,
  TextInput,
  useCreate,
  useNotify,
  FormWithRedirect
} from 'react-admin';
import { Dialog, DialogTitle, DialogContent, DialogActions, makeStyles } from '@material-ui/core';
import IconContentAdd from '@material-ui/icons/Add';
import IconCancel from '@material-ui/icons/Cancel';
import PairLocationInput from "./PairLocationInput";
import { ReferenceInput } from '@semapps/semantic-data-provider';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center'
  }
});

const ReferenceQuickCreateInput = props => {
  const classes = useStyles();

  const [showDialog, setShowDialog] = useState(false);
  const [version, setVersion] = useState(0);
  const [create, { loading }] = useCreate(props.reference);
  const notify = useNotify();
  const form = useForm();

  const handleSubmit = async values => {
    create(
      { payload: { data: values } },
      {
        onSuccess: ({ data }) => {
          setShowDialog(false);
          // Update the comment form to target the newly created post
          form.change(props.source, data.id);
          // Increase the version so that ReferenceInput reload all the available values
          setVersion(version + 1);
        },
        onFailure: ({ error }) => {
          notify(error.message, 'error');
        }
      }
    );
  };

  return (
    <div className={classes.root}>
      {/* Updating the key will force ReferenceInput to reload the available values */}
      <ReferenceInput key={version} {...props} />
      <Button onClick={() => setShowDialog(true)} label="ra.action.create">
        <IconContentAdd />
      </Button>
      <Dialog fullWidth open={showDialog} onClose={() => setShowDialog(false)}>
        <DialogTitle>Créer un nouveau lieu</DialogTitle>
        <FormWithRedirect
          resource={props.reference}
          save={handleSubmit}
          render={({ handleSubmitWithRedirect, pristine, saving }) => (
            <>
              <DialogContent>
                <TextInput label="Titre" source="pair:label" validate={required()} fullWidth />
                <PairLocationInput label="Adresse" source="pair:hasPostalAddress" fullWidth />
              </DialogContent>
              <DialogActions>
                <Button label="ra.action.cancel" onClick={() => setShowDialog(false)} disabled={loading}>
                  <IconCancel />
                </Button>
                <SaveButton
                  handleSubmitWithRedirect={handleSubmitWithRedirect}
                  pristine={pristine}
                  saving={saving}
                  disabled={loading}
                />
              </DialogActions>
            </>
          )}
        />
      </Dialog>
    </div>
  );
};

export default ReferenceQuickCreateInput;
