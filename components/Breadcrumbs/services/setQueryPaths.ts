const setQueryPaths = (queryPath: string, nastedPaths: string) => {
    let prevPath = "";

    const paths = queryPath
        .split("/")
        .filter((path) => path !== "")
        .map((path, index) => {
            const title = path.charAt(0).toUpperCase() + path.substring(1).toLowerCase();
            const url = `/${path}`;

            switch (nastedPaths) {
                case "/products/[id]":
                    if (index === 0) {
                        return { url: `/products/1`, title };
                    }

                    if (index === 1) {
                        return { url: ``, title: `Site ${title}` };
                    }

                case "/product/[slug]":
                    if (index === 0) {
                        return { url: `/products/1`, title: "Products" };
                    }

                    if (index === 1) {
                        return { url: ``, title: `product: ${title}` };
                    }

                default:
                    if (index === 0) {
                        prevPath = path;
                        return { url, title };
                    }

                    if (index === 1) {
                        return { url: `/${prevPath}/${path}`, title };
                    }
            }

            return { url, title };
        });
    prevPath = "";
    return paths;
};

export default setQueryPaths;
