{{ header }}

<div class="bb-main-content">
    <table class="bb-box" cellpadding="0" cellspacing="0">
        <tbody>
            <tr>
                <td class="bb-content bb-pb-0" align="center">
                    <table class="bb-icon bb-icon-lg bb-bg-blue" cellspacing="0" cellpadding="0">
                        <tbody>
                            <tr>
                                <td valign="middle" align="center">
                                    <img src="{{ 'shopping-cart-x' | icon_url }}" class="bb-va-middle" width="40" height="40" alt="Icon">
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <h1 class="bb-text-center bb-m-0 bb-mt-md">Customer has cancelled order {{ order_id }}</h1>
                </td>
            </tr>
            <tr>
                <td class="bb-content">
                    <p>Hello,</p>
                    <p>Customer {{ customer_name }} has cancelled order <strong>{{ order_id }}</strong> due to reason {{ cancellation_reason }}.</p>
                </td>
            </tr>
            <tr>
                <td class="bb-content bb-pt-0">
                    <h4>Here's what you ordered:</h4>
                    {{ product_list }}

                    {% if order_note %}
                    <div>Note: {{ order_note }}</div>
                    {% endif %}
                </td>
            </tr>
        </tbody>
    </table>
</div>

{{ footer }}
