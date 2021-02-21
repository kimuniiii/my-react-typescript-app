export const Validation = {
  AllowDocumentType: [
    'txt',
    'pdf',
    'doc',
    'docx',
    'xls',
    'xlsx',
    'ppt',
    'pptx',
  ],
  AllowImageType: ['png', 'jpg', 'gif', 'jpeg'],
};

export type AcceptedDocumentExtension = typeof Validation['AllowDocumentType'][number];
export type AcceptedImageExtension = typeof Validation['AllowImageType'][number];
