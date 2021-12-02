const express = require('express')
const { ctrlWrapper, validation } = require('../../middlewares')
const { joiContactSchema, statusSchema } = require('../../models')
const { contacts: ctrl } = require('../../controllers')

const router = express.Router()

router.get('/', ctrlWrapper(ctrl.allContacts))

router.get('/:id', ctrlWrapper(ctrl.getContactById))

router.post('/', validation(joiContactSchema), ctrlWrapper(ctrl.addContact))

router.put(
  '/:id',
  validation(joiContactSchema),
  ctrlWrapper(ctrl.updateContactById)
)

router.delete('/:id', ctrlWrapper(ctrl.removeContact))

router.patch(
  '/:id/favorite',
  validation(statusSchema),
  ctrlWrapper(ctrl.updateStatusContact)
)

module.exports = router
