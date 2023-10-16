<?php declare(strict_types=1);

namespace IhFaqPlugin\Migration;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Migration\MigrationStep;

class Migration1697387369AddProductExtension extends MigrationStep
{
    public function getCreationTimestamp(): int
    {
        return 1697387369;
    }

    public function update(Connection $connection): void
    {
        $connection->exec("CREATE TABLE IF NOT EXISTS `ih_product_extension` (
            `id` BINARY(16) NOT NULL,
            `product_id` BINARY(16) NULL,
            `faq_id` BINARY(16) NOT NULL,
            `created_at` DATETIME(3) NOT NULL,
            `updated_at` DATETIME(3) NULL,
            PRIMARY KEY (`id`),
            KEY `fk.ih_product_extension.product_id` (`product_id`),
            KEY `fk.ih_product_extension.faq_id` (`faq_id`),
            CONSTRAINT `fk.ih_product_extension.product_id` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
            CONSTRAINT `fk.ih_product_extension.faq_id` FOREIGN KEY (`faq_id`) REFERENCES `ih_faq` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;");
    }

    public function updateDestructive(Connection $connection): void
    {
        // implement update destructive
    }
}
