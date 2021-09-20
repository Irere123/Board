import React from "react";
import { Close } from "@mui/icons-material";
import { Form, Formik } from "formik";
import { Button, TextField } from "@mui/material";

import { CreatePostComponent } from "../../generated/graphql";

interface Props {
  onClose: () => void;
}

interface FormValues {
  title: string;
  author: string;
  body: string;
}

const MyForm: React.FC<Props> = ({ onClose }) => {
  return (
    <>
      <div className="createPostModal__title">
        <h3>Create Your Post</h3>
      </div>
      <CreatePostComponent>
        {(mutate) => (
          <Formik<FormValues>
            initialValues={{ author: "", body: "", title: "" }}
            onSubmit={async (values, { resetForm }) => {
              const response = await mutate({
                variables: { input: values },
                update: (store) => {
                  store.evict({ fieldName: "posts" });
                },
              });

              if (response.data?.createPost.ok) {
                resetForm();
                onClose();
              }
            }}
          >
            {({ handleChange, handleSubmit, isSubmitting, values }) => (
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
                  label="Your name"
                  placeholder="What's your name"
                  onChange={handleChange}
                  value={values.author}
                  name="author"
                />
                <TextField
                  label="Title"
                  placeholder="Your post's title"
                  onChange={handleChange}
                  name="title"
                  value={values.title}
                />
                <TextField
                  label="Post"
                  placeholder="Write your post here"
                  onChange={handleChange}
                  name="body"
                  value={values.body}
                />
                <Button type="submit" disabled={isSubmitting}>
                  create post
                </Button>
              </Form>
            )}
          </Formik>
        )}
      </CreatePostComponent>
    </>
  );
};

export const CreatePostModal: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="createPostModal">
      <div className="createPostModal__closeIcon" onClick={onClose}>
        <span>
          <Close />
        </span>
      </div>
      <div>
        <MyForm onClose={onClose} />
      </div>
    </div>
  );
};
