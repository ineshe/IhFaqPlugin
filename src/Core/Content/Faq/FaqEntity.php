<?php declare(strict_types=1);

namespace IhFaqPlugin\Core\Content\Faq;

use Shopware\Core\Framework\DataAbstractionLayer\Entity;
use Shopware\Core\Framework\DataAbstractionLayer\EntityIdTrait;
use Shopware\Core\Content\ProductEntity;

class FaqEntity extends Entity
{
    use EntityIdTrait;

    /**
     * @var string
     */
    protected $question;

    /**
     * @var string|null
     */    
    protected $answer;

        /**
     * @var ProductEntity
     */
    protected $product;

    /**
     * @return string $question
     */
    public function getQuestion(): ?string
    {
        return $this->question;
    }

    /**
     * @param string|null $question
     */
    public function setQuestion(?string $question): void
    {
        $this->question = $question;
    }

    /**
     * @return string|null $question
     */
    public function getAnswer(): ?string
    {
        return $this->answer;
    }

    /**
     * @param string|null $answer
     */
    public function setAnswer(?string $answer): void
    {
        $this->answer = $answer;
    }

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
}
