<?php declare(strict_types=1);

namespace IhFaqPlugin\Extension\Content\Product;

use Shopware\Core\Content\Product\ProductDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\EntityExtension;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;
use Shopware\Core\Framework\DataAbstractionLayer\Field\OneToOneAssociationField;

class ProductExtension extends EntityExtension
{
    public function extendFields(FieldCollection $collection): void
    {
        $collection->add(
            new OneToOneAssociationField(
                propertyName: 'productExtension', 
                storageName: 'id', 
                referenceField: 'product_id', 
                referenceClass: ProductExtensionDefinition::class, 
                autoload: true
            )
        );
    }

    public function getDefinitionClass(): string
    {
        return ProductDefinition::class;
    }
}
