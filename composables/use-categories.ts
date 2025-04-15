interface ICategoryBase {
  id: number;
  slug: string;
  name: string;
  description: string;
}

interface ICategory extends ICategoryBase {
  subcategories: ICategory[];
}

export const useCategories = () => {
  const runtimeConfig = useRuntimeConfig();

  const { baseUrl } = runtimeConfig.public;

  const { data } = useAsyncData<ICategory[]>('categories', () => {
    return $fetch(`${baseUrl}/api/categories`, {
      method: 'GET',
    });
  });

  return {
    categories: data,
  };
};
