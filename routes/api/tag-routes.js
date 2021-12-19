const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  const all = await Tag.findAll();
  res.send(all);
  // find all tags
  // be sure to include its associated Product data
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  const tag = await Tag.findByPk(req.params.id);
  res.send(tag);
  // be sure to include its associated Product data
});

router.post("/", async (req, res) => {
  // create a new tag
  const newTag = await Tag.create({
    tag_name: req.body.tag_name,
  });
  res.send(newTag);
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  const updateTag = await Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.send(updateTag);
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    await Tag.destroy({
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
