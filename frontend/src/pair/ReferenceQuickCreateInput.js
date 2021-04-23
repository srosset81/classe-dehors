import React, { useState } from 'react';
import { useForm } from 'react-final-form';
import {
  required,
  Button,
  SaveButton,
  TextInput,
  useCreate,
  useNotify,
  FormWithRedirect, SelectInput
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

const ReferenceQuickCreateInput = ({ label, reference, source, children }) => {
  const classes = useStyles();

  const [showDialog, setShowDialog] = useState(false);
  const [create, { loading }] = useCreate(reference);
  const notify = useNotify();
  const form = useForm();
  console.log('formmmmm', form);

  const handleSubmit = async values => {
    create(
      { payload: { data: values } },
      {
        onSuccess: ({ data }) => {
          console.log('onSuccess', data)
          setShowDialog(false);
          // Update the comment form to target the newly created post
          // Updating the ReferenceInput value will force it to reload the available posts
          form.change(source, data.id);
        },
        onFailure: ({ error }) => {
          notify(error.message, 'error');
        }
      }
    );
  };

  console.log('ReferenceQuickCreateInput refresh');

  return (
    <div className={classes.root}>
      <ReferenceInput label={label} reference={reference} source={source}>
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
      <Button onClick={() => setShowDialog(true)} label="ra.action.create">
        <IconContentAdd />
      </Button>
      <Dialog fullWidth open={showDialog} onClose={() => setShowDialog(false)}>
        <DialogTitle>Créer un nouveau lieu</DialogTitle>
        <FormWithRedirect
          resource={reference}
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
