export type DType =
  | 'int8'
  | 'uint8'
  | 'fp32'
  | 'fp16'
  | 'q8'
  | 'q4'
  | 'bnb4'
  | 'q4f16'
  | Record<
      string,
      'int8' | 'uint8' | 'fp32' | 'fp16' | 'q8' | 'q4' | 'bnb4' | 'q4f16'
    >
  | undefined;
