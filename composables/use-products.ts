export interface IProduct {
  id: number;
  slug: string;
  name: string;
  image: string;
  price: number;
  unit: string;
  status: string;
  categorySlug: string;
}

interface IProductResult {
  data: IProduct[];
  total: number;
  page: number;
  limit: number;
}

interface IProductQuery {
  category: string;
  page?: number;
  limit?: number;
  fields?: string;
}

export const useProducts = (
  query: Ref<IProductQuery> | ComputedRef<IProductQuery>
) => {
  const runtimeConfig = useRuntimeConfig();

  const { baseUrl } = runtimeConfig.public;

  const { data: result } = useAsyncData<IProductResult>(
    query.value.category,
    () => {
      const { category, page, limit, fields } = unref(query);

      return $fetch(`${baseUrl}/api/products`, {
        method: 'GET',
        params: { category, page, limit, fields },
      });
    },
    {
      watch: [query],
    }
  );

  return {
    result,
  };
};
