import React, { useState } from 'react';
import { useForm } from 'react-final-form';
import { Button, SaveButton, useCreate, useNotify, useTranslate, FormWithRedirect, AutocompleteInput } from 'react-admin';
import { Dialog, DialogTitle, DialogContent, DialogActions, makeStyles } from '@material-ui/core';
import IconContentAdd from '@material-ui/icons/Add';
import IconCancel from '@material-ui/icons/Cancel';
import { ReferenceInput } from '@semapps/semantic-data-provider';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  dialogTitle: {
    paddingBottom: 0
  },
  container: {
    flexGrow: 0,
  },
});

const ReferenceQuickCreateInput = ({ children, selectOptionText, validate, ...rest }) => {
  const classes = useStyles();

  const [showDialog, setShowDialog] = useState(false);
  const [version, setVersion] = useState(0);
  const [create, { loading }] = useCreate(rest.reference);
  const notify = useNotify();
  const translate = useTranslate();
  const form = useForm();

  const handleSubmit = async values => {
    create(
      { payload: { data: values } },
      {
        onSuccess: ({ data }) => {
          setShowDialog(false);
          // Update the comment form to target the newly created post
          form.change(rest.source, data.id);
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
      <ReferenceInput key={version} {...rest} classes={{container:classes.container}}>
        <AutocompleteInput optionText={selectOptionText} suggestionLimit={5} shouldRenderSuggestions={value => value.length > 0} />
      </ReferenceInput>
      <Button onClick={() => setShowDialog(true)} label="ra.action.create">
        <IconContentAdd />
      </Button>
      <Dialog fullWidth open={showDialog} onClose={() => setShowDialog(false)}>
        <DialogTitle className={classes.dialogTitle}>{translate('ra.action.create')}</DialogTitle>
        <FormWithRedirect
          validate={validate}
          resource={rest.reference}
          save={handleSubmit}
          render={({ handleSubmitWithRedirect, pristine, saving }) => (
            <>
              <DialogContent>
                {children}
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
