


<h1 class="govuk-u-heading-36">
Label
</h1>

<p class="govuk-u-core-24">
  Use labels for all form fields.
</p>

<p class="govuk-u-copy-19">
  <a href="http://www.linktodesignsystem.com/label">Find label guidance on the GOV.UK Design System.</a>
</p>


<p class="govuk-u-copy-19">
<a href="http://govuk-frontend-review.herokuapp.com/components/label/preview">Preview the label component.
</a>
</p>

  <h2 class="govuk-u-heading-24">How to call this component</h2>

  <pre><code>{% from &quot;label/macro.njk&quot; import govukLabel %}

{{ govukLabel(
  classes=&#39;&#39;,
  labelText=&#39;National Insurance number&#39;,
  hintText=&#39;It’s on your National Insurance card, benefit letter, payslip or P60.
    For example, ‘QQ 12 34 56 C’.&#39;,
  id=&#39;&#39;
  )
}}

{{ govukLabel(
  classes=&#39;govuk-c-label--bold&#39;,
  labelText=&#39;National Insurance number&#39;,
  hintText=&#39;It’s on your National Insurance card, benefit letter, payslip or P60.
    For example, ‘QQ 12 34 56 C’.&#39;,
  id=&#39;&#39;
  )
}}

{{ govukLabel(
  classes=&#39;&#39;,
  labelText=&#39;National Insurance number&#39;,
  hintText=&#39;It’s on your National Insurance card, benefit letter, payslip or P60.
    For example, ‘QQ 12 34 56 C’.&#39;,
  errorMessage=&#39;Error message goes here&#39;,
  id=&#39;&#39;
  )
}}
</code></pre>

<h2 class="govuk-u-heading-24">Component arguments</h2>

<div>

<!-- TODO: Use the table macro here and pass it component argument data -->
| Name          | Type    | Required  | Description
|---            |---      |---        |---
| classes       | string  | No        | Optional additional classes
| labelText     | string  | Yes       | The label text
| hintText      | string  | No        | Optional hint text
| errorMessage  | string  | No        | Optional error message
| id            | string  | Yes       | The value of the for attribute, the id input the label is associated with

</div>

<h2 class="govuk-u-heading-24">Component HTML</h2>
<pre><code>{% from &quot;label/macro.njk&quot; import govukLabel %}

{{ govukLabel(
  classes=&#39;&#39;,
  labelText=&#39;National Insurance number&#39;,
  hintText=&#39;It’s on your National Insurance card, benefit letter, payslip or P60.
    For example, ‘QQ 12 34 56 C’.&#39;,
  id=&#39;&#39;
  )
}}

{{ govukLabel(
  classes=&#39;govuk-c-label--bold&#39;,
  labelText=&#39;National Insurance number&#39;,
  hintText=&#39;It’s on your National Insurance card, benefit letter, payslip or P60.
    For example, ‘QQ 12 34 56 C’.&#39;,
  id=&#39;&#39;
  )
}}

{{ govukLabel(
  classes=&#39;&#39;,
  labelText=&#39;National Insurance number&#39;,
  hintText=&#39;It’s on your National Insurance card, benefit letter, payslip or P60.
    For example, ‘QQ 12 34 56 C’.&#39;,
  errorMessage=&#39;Error message goes here&#39;,
  id=&#39;&#39;
  )
}}
</code></pre>

<h2 class="govuk-u-heading-24">Installation</h2>
<pre><code>npm install --save @govuk-frontend/label</code></pre>

