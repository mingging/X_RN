export type FirebaseErrorTypes = {code: string; message: string};

export type BasicResponseTypes<T> = {
  code: string;
  message: string;
  data: T;
};
