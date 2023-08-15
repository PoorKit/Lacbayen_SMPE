// helpers/errorHandler.ts
export function ErrorMessage(res: any, error: any) {
  if (error instanceof Error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  } else {
    console.error('Unknown error:', error);
    res.status(500).json({ error: 'An unknown error occurred' });
  }
}
