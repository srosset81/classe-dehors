import React from 'react';
import { useTranslate, getFieldLabelTranslationArgs, useShowContext } from 'react-admin';
import { Box, Typography } from '@material-ui/core';
import { LargeLabel } from '@semapps/archipelago-layout';

const SubList = ({ children, label }) => {
  const translate = useTranslate();
  const { basePath, loaded, record, resource } = useShowContext();
  if (!loaded) return null;

  return (
    <Box>
      <LargeLabel>{label}</LargeLabel>
      {React.Children.map(children, field =>
        field && record[field.props.source] && React.isValidElement(field) ? (
          <div key={field.props.source}>
            {field.props.addLabel ? (
              <Typography paragraph>
                <Typography variant="h6">
                  {translate(
                    ...getFieldLabelTranslationArgs({
                      label: field.props.label,
                      resource,
                      source: field.props.source
                    })
                  )}
                  <br />
                </Typography>
                {React.cloneElement(field, {
                  record,
                  resource,
                  basePath
                })}
              </Typography>
            ) : typeof field.type === 'string' ? (
              field
            ) : (
              React.cloneElement(field, {
                record,
                resource,
                basePath
              })
            )}
          </div>
        ) : null
      )}
    </Box>
  );
};

export default SubList;
