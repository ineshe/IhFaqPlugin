<?php declare(strict_types=1);

namespace IhFaqPlugin\Extension\Content\Product;

use Shopware\Core\Content\Product\ProductDefinition;
use IhFaqPlugin\Core\Content\Faq\FaqDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\EntityDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\Field\FkField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\PrimaryKey;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Required;
use Shopware\Core\Framework\DataAbstractionLayer\Field\IdField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\OneToOneAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\OneToManyAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\StringField;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;

class ProductExtensionDefinition extends EntityDefinition
{
    public const ENTITY_NAME = 'ih_product_extension';

    public function getEntityName(): string
    {
        return self::ENTITY_NAME;
    }

    public function getEntityClass(): string
    {
        return ProductExtensionEntity::class;
    }

    protected function defineFields(): FieldCollection
    {
        return new FieldCollection([
            (new IdField(storageName: 'id', propertyName: 'id'))->addFlags(new Required(), new PrimaryKey()),
            new FkField(storageName: 'product_id', propertyName: 'productId', referenceClass: ProductDefinition::class),
            (new FkField(storageName: 'faq_id', propertyName: 'faqId', referenceClass: FaqDefinition::class))->addFlags(new Required()),

            new OneToOneAssociationField(
                propertyName:'product', 
                storageName:'product_id', 
                referenceField:'id', 
                referenceClass: ProductDefinition::class, 
                autoload: false
            ),
            new OneToManyAssociationField(
                propertyName: 'faq',
                referenceClass: FaqDefinition::class,
                referenceField: 'id',
                localField: 'faq_id'
            )
        ]);
    }
}
