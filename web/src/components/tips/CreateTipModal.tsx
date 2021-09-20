import { Close } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import {
  CreateSuggestionComponent,
  SuggestionsQuery,
} from "../../generated/graphql";

interface Props {
  onClose: () => void;
}

interface FormValues {
  body: string;
  tag: string;
}

const MyForm: React.FC<Props> = ({ onClose }) => {
  return (
    <CreateSuggestionComponent>
      {(mutate) => (
        <Formik<FormValues>
          initialValues={{ body: "", tag: "" }}
          onSubmit={async (values, { resetForm, setSubmitting }) => {
            const response = await mutate({
              variables: { input: values },
              update: (store) => {
                store.evict({ fieldName: "suggestions" });
              },
            });

            if (!response.data?.createSuggugestion.ok) {
              setSubmitting(false);
            }

            resetForm();
            onClose();
          }}
        >
          {({ values, handleChange, handleSubmit, isSubmitting }) => (
            <Form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                marginTop: "50px",
              }}
            >
              <TextField
                value={values.body}
                name="body"
                placeholder="Write your tip"
                label="Your Tip"
                onChange={handleChange}
              />
              <TextField
                value={values.tag}
                name="tag"
                placeholder="What's your tip's tag"
                label="Tag"
                onChange={handleChange}
              />
              <Button disabled={isSubmitting} type="submit">
                Create
              </Button>
            </Form>
          )}
        </Formik>
      )}
    </CreateSuggestionComponent>
  );
};

export const CreateTipModal: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="createTipModal">
      <div className="createTipModal__closeIcon" onClick={onClose}>
        <span>
          <Close />
        </span>
      </div>
      <div className="createTipModal__content">
        <h3 style={{ textAlign: "center" }}>Create a Tip</h3>
        <div>
          <MyForm onClose={onClose} />
        </div>
      </div>
    </div>
  );
};
