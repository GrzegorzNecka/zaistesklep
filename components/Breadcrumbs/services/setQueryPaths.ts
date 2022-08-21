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
                    break;

                case "/product/[slug]":
                    if (index === 0) {
                        return { url: `/products/1`, title: "Products" };
                    }

                    if (index === 1) {
                        return { url: ``, title: `product: ${title}` };
                    }
                    break;
                default:
                    if (index === 0) {
                        prevPath = path;
                        console.log(title);
                        return { url, title };
                    }

                    if (index === 1) {
                        if (title.startsWith("Success?")) {
                            const newTitle = "Payment Status";
                            return { url: `/${prevPath}/${path}`, title: newTitle };
                        }

                        return { url: `/${prevPath}/${path}`, title };
                    }
            }

            return { url, title };
        });

    return paths;
};

export default setQueryPaths;
