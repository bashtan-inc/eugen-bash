class Store {
  constructor() {
    this.social = [
      {
        name: 'linkedin',
        icon: 'logo-linkedin',
        link: 'https://www.linkedin.com/in/evgeniy-bashtan-734180b9/',
      },
      {
        name: 'facebook',
        icon: 'logo-facebook',
        link: 'https://www.facebook.com/eugene.bashtan.1',
      },
      {
        name: 'instagram',
        icon: 'logo-instagram',
        link: 'https://www.instagram.com/eugen.bash/',
      },
      {
        name: 'mail',
        icon: 'mail',
        value: 'contact@eugen-bash.com',
        link: 'mailto:contact@eugen-bash.com',
      },
    ];
    this.name = 'Eugene Bashtan';
    this.description = 'Full Stack Web Developer';
    this.location = 'Russia, Moscow';
    this.copyrights = 'Copyright ©2024 All rights reserved';
  }

  mail() {
    return this.social.find(({ name }) => name === 'mail');
  }
}

export default new Store();
