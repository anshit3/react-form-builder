const config = {
  typeOfPage: 'modal',
  height: '',
  width: '',
  numberOfPages: '',
  multiplePages: '',
  pageCollection: [
    {
      pageNumber: '',
      targetPage: '',
      styles: {
        bgColor: '',
        textColor: '',
        bgImage: '',
      },
      pageFilelds: [
        {
          label: 'Name',
          placeholderText: 'Name',
          type: 'inputText',
          isRequired: true,
          default: true,
        },
        {
          label: 'Email',
          placeholderText: 'Email',
          type: 'email',
          isRequired: true,
          default: true,
        },
        {
          label: 'Contact Number',
          placeholderText: 'Contact Number',
          type: 'tel',
          isRequired: true,
          default: true,
        },
      ],
    },
  ],
};

export default config;
