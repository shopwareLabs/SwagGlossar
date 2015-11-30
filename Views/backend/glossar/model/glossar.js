/**
 * Shopware 4.0
 * Copyright © 2012 shopware AG
 *
 * According to our dual licensing model, this program can be used either
 * under the terms of the GNU Affero General Public License, version 3,
 * or under a proprietary license.
 *
 * The texts of the GNU Affero General Public License with an additional
 * permission and of our proprietary license can be found at and
 * in the LICENSE file you have received along with this program.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * "Shopware" is a registered trademark of shopware AG.
 * The licensing of the program under the AGPLv3 does not imply a
 * trademark license. Therefore any rights, title and interest in
 * our trademarks remain entirely with us.
 *
 * @category   Shopware
 * @package    Glossar
 * @subpackage Model
 * @copyright  Copyright (c) 2012, shopware AG (http://www.shopware.de)
 * @version    $Id$
 * @author shopware AG
 */

Ext.define('Shopware.apps.Glossar.model.Glossar', {
    /**
     * Extends the standard ExtJS 4
     * @string
     */
    extend: 'Ext.data.Model',
    /**
     * The fields used for this model
     * @array
     */
    fields: [
        'id',
        'keywords',
        'glossar',
        'shop'
    ],
    /**
     * Configure the data communication
     * @object
     */
    proxy: {
        type: 'ajax',
        /**
         * Configure the url mapping for the different
         * @object
         */
        api: {
            //read out all keywords
            read: '{url controller="glossar" action="getGlossar"}',
            create: '{url controller="glossar" action="insertEditGlossar"}',
            update: '{url controller="glossar" action="insertEditGlossar"}',
            destroy: '{url controller="glossar" action="deleteGlossar"}'
        },
        /**
         * Configure the data reader
         * @object
         */
        reader: {
            type: 'json',
            root: 'data',
            //total values, used for paging
            totalProperty: 'total'
        }
    }
});