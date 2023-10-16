<?php declare(strict_types=1);

namespace IhFaqPlugin\Extension\Content\Product;

use Shopware\Core\Framework\DataAbstractionLayer\Entity;
use Shopware\Core\Framework\DataAbstractionLayer\EntityIdTrait;

class ProductExtensionEntity extends Entity
{
    use EntityIdTrait;

    protected $product;

    protected $faq;

    /**
     * @return ProductEntity $product
     */
    public function getProduct(): ?ProductEntity
    {
        return $this->product;
    }

    /**
     * @param ProductEntity|null $product
     */
    public function setProduct(?ProductEntity $product): void
    {
        $this->product = $product;
    }

    /**
     * @return FaqEntity $faq
     */
    public function getFaq(): ?FaqEntity
    {
        return $this->faq;
    }

    /**
     * @param FaqEntity|null $faq
     */
    public function setFaq(?FaqEntity $faq): void
    {
        $this->faq = $faq;
    }
}
