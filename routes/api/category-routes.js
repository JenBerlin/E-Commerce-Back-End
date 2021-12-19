const router = require("express").Router();
const { response } = require("express");
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  const allCategories = await Category.findAll();
  res.send(allCategories);
  // be sure to include its associated Products
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  const category = await Category.findByPk(req.params.id);
  res.send(category);
  // be sure to include its associated Products
});

router.post("/", async (req, res) => {
  // create a new category
  const newCategory = await Category.create({
    category_name: req.body.category_name,
  });
  res.send(newCategory);
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  const updateCategory = await Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.send(updateCategory);
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(403);
  }
});

module.exports = router;
