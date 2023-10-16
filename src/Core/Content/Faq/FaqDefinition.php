<?php declare(strict_types=1);

namespace IhFaqPlugin\Core\Content\Faq;

use Shopware\Core\Framework\DataAbstractionLayer\EntityDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\PrimaryKey;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Required;
use Shopware\Core\Framework\DataAbstractionLayer\Field\IdField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\FkField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\ManyToOneAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\LongTextField;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;
use Shopware\Core\Content\Product\ProductDefinition;

class FaqDefinition extends EntityDefinition
{
    public const ENTITY_NAME = 'ih_faq';

    public function getEntityName(): string
    {
        return self::ENTITY_NAME;
    }

    public function getCollectionClass(): string
    {
        return FaqCollection::class;
    }

    public function getEntityClass(): string
    {
        return FaqEntity::class;
    }

    protected function defineFields(): FieldCollection
    {
        return new FieldCollection(
            [
                (new IdField(storageName: 'id', propertyName: 'id'))->addFlags(new Required(), new PrimaryKey()),
                (new LongTextField(storageName: 'question', propertyName: 'question'))->addFlags(new Required()),
                new LongTextField(storageName: 'answer', propertyName: 'answer'),
                (new FkField(storageName: 'product_id', propertyName: 'productId', referenceClass: ProductDefinition::class))->addFlags(new Required()),
                new ManyToOneAssociationField(
                    propertyName: 'product',
                    storageName: 'product_id',
                    referenceClass: ProductDefinition::class,
                    referenceField: 'id',
                    autoload: false
                )
            ]
        );
    }
}