export const create = (req, res) => {
    const { name, price } = req.body;
    // Logic to save the product (pseudo-code)
    res.status(201).json({ success: true, message: 'Product created', product: { name, price } });
};

export const productlist = (req, res) => {
    const products = [{ id: 1, name: 'Sample Product', price: 100 }];
    res.status(200).json({ success: true, products });
};
