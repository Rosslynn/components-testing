import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import CharacterComponent from '@/components/CharacterComponent.vue';

const propsMock = {
  character: {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
    ],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: '2017-11-04T18:48:46.250Z',
  },
};

describe('CharacterComponent', () => {
  it('should render the image', () => {
    // Arrange
    const wrapper = shallowMount(CharacterComponent, {
      propsData: propsMock,
      stubs: {
        RouterLink: true,
      },
    });

    // Act
    const characterImage = wrapper.find('img');

    // Assert
    expect(characterImage.attributes('src')).toBe(propsMock.character.image);
    expect(characterImage.attributes('alt')).toBe(propsMock.character.name);
  });

  it('should render the name', () => {
    // Arrange
    const wrapper = shallowMount(CharacterComponent, {
      propsData: propsMock,
      stubs: {
        RouterLink: true,
      },
    });

    // Act
    const html = wrapper.html();

    // Assert
    expect(html).toContain(propsMock.character.name);
  });

  it('should render the specie', () => {
    // Arrange
    const wrapper = shallowMount(CharacterComponent, {
      propsData: propsMock,
      stubs: {
        RouterLink: true,
      },
    });

    // Act
    const html = wrapper.html();

    // Arrange
    expect(html).toContain(propsMock.character.species);
  });

  it('should render the status', () => {
    // Arrange
    const wrapper = shallowMount(CharacterComponent, {
      propsData: propsMock,
      stubs: {
        RouterLink: true,
      },
    });

    // Act
    const html = wrapper.html();

    // Assert
    expect(html).toContain(propsMock.character.status);
  });

  it.skip.each`
  propertyName | expected
  ${'name'} | ${propsMock.character.name}
  ${'species'} | ${propsMock.character.species}
  ${'status'} | ${propsMock.character.status}
`('should render the $propertyName', ({ expected }) => {
    // Arrange
    const wrapper = shallowMount(CharacterComponent, {
      propsData: propsMock,
      stubs: {
        RouterLink: true,
      },
    });

    // Act
    const html = wrapper.html();

    // Assert
    expect(html).toContain(expected);
  });

  describe('view more button', () => {
    it('should display an informative text', () => {
      // Arrange
      const wrapper = shallowMount(CharacterComponent, {
        propsData: propsMock,
        stubs: {
          RouterLink: RouterLinkStub,
        },
      });

      // Act
      const viewMoreButton = wrapper.findComponent(RouterLinkStub);
      const viewMoreButtonHtml = viewMoreButton.html();

      // Assert
      expect(viewMoreButtonHtml).toBeTruthy();
    });

    describe('when clicked', () => {
      it('should go to the page to see more information about the character', () => {
        // Arrange
        const expectedResult = { name: 'single-character', params: { id: propsMock.character.id } };
        const wrapper = shallowMount(CharacterComponent, {
          propsData: propsMock,
          stubs: {
            RouterLink: RouterLinkStub,
          },
        });

        // Act
        const viewMoreButton = wrapper.findComponent(RouterLinkStub);
        const viewMoreButtonProps = viewMoreButton.props();

        // Assert
        expect(viewMoreButtonProps.to).toEqual(expectedResult);
      });
    });
  });
});
