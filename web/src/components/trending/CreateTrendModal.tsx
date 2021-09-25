import React from "react";
import { Close } from "@mui/icons-material";
import { CreateTrendComponent } from "../../generated/graphql";
import { Form, Formik } from "formik";
import { Button, TextField } from "@mui/material";

interface Props {
  onClose: () => void;
}

interface FormValues {
  source: string;
  sourceUrl: string;
  imageUrl: string;
  body: string;
}

const MyForm: React.FC<Props> = () => {
  return (
    <>
      <CreateTrendComponent>
        {(mutate) => (
          <Formik<FormValues>
            initialValues={{
              body: "",
              imageUrl: "",
              source: "",
              sourceUrl: "",
            }}
            onSubmit={async (values) => {
              await mutate({
                variables: values,
              });
            }}
          >
            {({ values, handleChange, handleSubmit, isSubmitting }) => (
              <Form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <TextField
                  value={values.source}
                  name="source"
                  label="Source"
                  placeholder="Trend's source"
                  onChange={handleChange}
                />
                <TextField
                  value={values.sourceUrl}
                  name="sourceUrl"
                  label="Source Url"
                  placeholder="Trend's source website url"
                  onChange={handleChange}
                />
                <TextField
                  value={values.body}
                  name="body"
                  label="About Trend"
                  placeholder="About that trend"
                  onChange={handleChange}
                />
                <TextField
                  value={values.imageUrl}
                  name="imageUrl"
                  label="Image Url(Optional)"
                  placeholder="Image of the trend"
                  onChange={handleChange}
                />
                <Button type="submit" disabled={isSubmitting}>
                  Create
                </Button>
              </Form>
            )}
          </Formik>
        )}
      </CreateTrendComponent>
    </>
  );
};

export const CreateTrendModal: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="createTrendModal">
      <div className="createTrendModal__closeIcon" onClick={onClose}>
        <span>
          <Close />
        </span>
      </div>
      <h3 style={{ textAlign: "center", textTransform: "uppercase" }}>
        Create a trend
      </h3>
      <div>
        <MyForm onClose={onClose} />
      </div>
    </div>
  );
};
