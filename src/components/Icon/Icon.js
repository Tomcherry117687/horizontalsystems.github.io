import React, { Component } from 'react'

class Icon extends Component {
  static defaultProps = {
    size: 24,
    color: '#9e9e9e',
    viewBox: '0 0 24 24'
  }

  getIcon() {
    switch (this.props.name) {
      case 'team':
        return <path fillRule="evenodd" clipRule="evenodd"
                     d="M6 1H18C20.7614 1 23 3.23858 23 6V18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V6C1 3.23858 3.23858 1 6 1ZM0 6C0 2.68629 2.68629 0 6 0H18C21.3137 0 24 2.68629 24 6V18C24 21.3137 21.3137 24 18 24H6C2.68629 24 0 21.3137 0 18V6ZM10.9052 12.8642L8.64222 9.92271C8.41592 9.63205 8.00643 9.64368 7.80168 9.94596L5.11842 13.6664C4.83824 14.05 5.08609 14.6081 5.53869 14.6081H18.4593C18.9011 14.6081 19.1597 14.0617 18.8903 13.678L15.1079 8.23691C14.8924 7.923 14.4613 7.923 14.2458 8.22528L10.9052 12.8642Z"
                     fill="#04AD5F" />
      case 'office':
        return <path fillRule="evenodd" clipRule="evenodd"
                     d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM16.6037 12.5718C17.2418 12.1819 17.2418 11.2552 16.6037 10.8652L10.5215 7.14829C9.8551 6.74107 9 7.22064 9 8.00157V15.4355C9 16.2164 9.8551 16.696 10.5215 16.2887L16.6037 12.5718Z"
                     fill="#04AD5F" />
      case 'github':
        return <path fillRule="evenodd" clipRule="evenodd"
                     d="M9.7029 22.7598C9.74397 22.6752 9.76225 22.5782 9.76225 22.4863C9.76225 22.2423 9.75474 19.3973 9.75045 18.5403C7.32047 19.1608 6.80777 17.163 6.80777 17.163C6.41037 15.9769 5.8376 15.6603 5.8376 15.6603C5.04441 15.0234 5.89767 15.036 5.89767 15.036C6.77452 15.1085 7.23574 16.0954 7.23574 16.0954C8.01498 17.6644 9.28011 17.2116 9.77834 16.9493C9.85771 16.2852 10.0835 15.8325 10.3329 15.5758C8.39307 15.316 6.35353 14.435 6.35353 10.4988C6.35353 9.37754 6.69408 8.46063 7.2529 7.74236C7.16334 7.48255 6.86302 6.43826 7.33871 5.0238C7.33871 5.0238 8.07238 4.7476 9.74081 6.07693C10.4375 5.84928 11.1851 5.7345 11.9278 5.73072C12.6701 5.7345 13.4166 5.84928 14.1149 6.07693C15.7828 4.7476 16.5154 5.0238 16.5154 5.0238C16.9921 6.43763 16.6918 7.48192 16.6022 7.74236C17.1616 8.46063 17.5 9.37754 17.5 10.4988C17.5 14.4451 15.4572 15.3135 13.511 15.5676C13.8247 15.8854 14.1036 16.5123 14.1036 17.4708C14.1036 18.3891 14.0988 20.1714 14.0956 21.3526C14.0941 21.938 14.0929 22.3758 14.0929 22.4876C14.0929 22.5893 14.1144 22.697 14.164 22.7872C19.2028 21.782 23 17.3344 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 17.2873 4.73043 21.7034 9.7029 22.7598ZM24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z"
                     fill="#04AD5F" />
      case 'mail':
        return <path
          d="M11.8083 9.41007C10.5374 9.41007 9.7815 10.4029 9.7815 12.0755C9.7815 13.7374 10.5484 14.741 11.7973 14.741C13.0901 14.741 13.9117 13.7158 13.9117 12.0755C13.9117 10.4353 13.101 9.41007 11.8083 9.41007ZM12.1808 3C17.4066 3 21 6.25899 21 10.9964C21 14.4604 19.3676 16.6403 16.7602 16.6403C15.4236 16.6403 14.4267 15.9496 14.2295 14.9029H14.0323C13.5721 16.0036 12.6409 16.5863 11.3701 16.5863C9.0913 16.5863 7.56847 14.7518 7.56847 12.0216C7.56847 9.39928 9.0913 7.58633 11.3043 7.58633C12.4656 7.58633 13.4297 8.15827 13.857 9.1187H14.0542V7.81295H16.059V13.759C16.059 14.5252 16.4644 14.9676 17.1765 14.9676C18.3926 14.9676 19.1595 13.4568 19.1595 11.1043C19.1595 7.19784 16.322 4.60791 12.0822 4.60791C7.83141 4.60791 4.84054 7.68345 4.84054 12.0647C4.84054 16.5324 7.80949 19.3705 12.4766 19.3705C13.7693 19.3705 15.073 19.1978 15.7085 18.9496V20.5683C14.7991 20.8381 13.605 21 12.367 21C6.68107 21 3 17.4604 3 12.0108C3 6.66906 6.73585 3 12.1808 3Z"
          fill="#05C46B" />
      case 'telegram':
        return <path
          d="M18.3423 6.29022C15.2603 9.06822 9.85432 13.9452 9.85432 13.9452L9.54332 16.8682L8.14332 12.2502C8.14332 12.2502 14.4863 8.20222 18.0563 5.92222C18.1553 5.85722 18.2953 5.87922 18.3683 5.97522C18.4443 6.07122 18.4333 6.20822 18.3423 6.29022ZM21.7693 3.15822C21.5853 3.00222 21.3323 2.95822 21.1043 3.04122C17.6093 4.33522 6.85032 8.37322 2.45132 9.99922C2.17332 10.1042 1.99132 10.3722 2.00032 10.6672C2.00932 10.9602 2.20832 11.2162 2.49432 11.3032C4.46732 11.8922 7.05532 12.7142 7.05532 12.7142C7.05532 12.7142 8.26632 16.3692 8.89532 18.2252C8.97532 18.4572 9.15832 18.6432 9.39832 18.7062C9.64032 18.7672 9.89532 18.7022 10.0753 18.5322C11.0883 17.5762 12.6553 16.0982 12.6553 16.0982C12.6553 16.0982 15.6303 18.2792 17.3203 19.4822C17.5873 19.6712 17.9343 19.7182 18.2413 19.6022C18.5503 19.4852 18.7773 19.2242 18.8443 18.9012C19.5713 15.4992 21.3253 6.88622 21.9853 3.79122C22.0363 3.55722 21.9513 3.31422 21.7693 3.15822Z"
          fill="#05C46B" />
      case 'youtube':
        return <path
          d="M19.615 3.184C16.011 2.938 7.984 2.939 4.385 3.184C0.488 3.45 0.029 5.804 0 12C0.029 18.185 0.484 20.549 4.385 20.816C7.985 21.061 16.011 21.062 19.615 20.816C23.512 20.55 23.971 18.196 24 12C23.971 5.815 23.516 3.451 19.615 3.184ZM9 16V8L17 11.993L9 16Z"
          fill="#05C46B" />
      case 'btc':
        return <path
          d="M13.342 13.038C13.608 13.197 13.79 13.399 13.9 13.641C14.001 13.879 14.023 14.148 13.969 14.455C13.899 14.819 13.741 15.1 13.493 15.328C13.241 15.547 12.965 15.672 12.659 15.698C12.354 15.727 11.983 15.698 11.541 15.622L10.786 15.476C10.534 15.433 10.384 15.385 10.33 15.35C10.279 15.314 10.247 15.259 10.235 15.184C10.229 15.133 10.252 14.936 10.302 14.624L10.721 12.387L12.063 12.635C12.652 12.745 13.075 12.876 13.342 13.038ZM13.965 8.91801C14.211 9.05701 14.381 9.22801 14.481 9.44201C14.583 9.66001 14.608 9.90401 14.555 10.176C14.506 10.442 14.386 10.661 14.211 10.831C14.028 11.004 13.789 11.114 13.487 11.154C13.183 11.202 12.732 11.172 12.141 11.063L11.003 10.849L11.476 8.32701L12.61 8.53901C13.277 8.66201 13.727 8.79101 13.965 8.91801ZM12.027 0.0620119C18.654 0.0610119 24.029 5.43201 24.029 12.063C24.029 18.69 18.654 24.062 12.027 24.062C5.40102 24.062 0.0280151 18.69 0.0280151 12.063C0.0280151 5.43101 5.40202 0.0620119 12.027 0.0620119ZM17.134 10.264C17.225 9.79601 17.171 9.33601 16.966 8.89001C16.76 8.44501 16.419 8.07301 15.949 7.76101C15.769 7.63801 15.539 7.53501 15.289 7.43601L15.63 5.61401L13.878 5.28701L13.559 6.98901L12.433 6.77701L12.753 5.07701L10.999 4.74601L10.676 6.45601L8.00102 5.95201L7.73402 7.38301L8.14402 7.46601C8.41502 7.50801 8.59902 7.57201 8.68301 7.64301C8.77102 7.70601 8.82602 7.78401 8.85002 7.87701C8.87302 7.97101 8.85902 8.17301 8.79902 8.47601L7.71902 14.249C7.66502 14.549 7.61102 14.742 7.55202 14.82C7.49702 14.895 7.41702 14.951 7.31102 14.978C7.20402 15.013 7.01801 15.002 6.74602 14.944L6.33402 14.872L6.06802 16.303L8.73902 16.804L8.42302 18.511L10.176 18.839L10.493 17.136L11.493 17.321C11.537 17.329 11.578 17.329 11.622 17.345L11.303 19.052L13.056 19.375L13.405 17.529C13.705 17.525 13.979 17.498 14.217 17.455C14.868 17.329 15.403 17.064 15.821 16.654C16.236 16.263 16.498 15.787 16.601 15.238C16.686 14.774 16.654 14.34 16.508 13.926C16.358 13.508 16.116 13.165 15.785 12.889C15.557 12.691 15.209 12.483 14.751 12.273C15.229 12.204 15.629 12.074 15.948 11.894C16.269 11.714 16.531 11.476 16.733 11.201C16.937 10.915 17.072 10.603 17.134 10.264Z"
          fill="#05C46B" />
      case 'eth':
        return <path
          d="M12 0C5.373 0 0 5.373 0 12C0 18.628 5.373 24 12 24C18.628 24 24 18.628 24 12C24 5.373 18.628 0 12 0ZM12 20.25L6.791 13.083L12 16.124L17.208 13.083L12 20.25ZM12 15.354L6.791 12.312L12 3.75L17.208 12.312L12 15.354Z"
          fill="#05C46B" />
      case 'eos':
        return (
          <g>
            <path d="M11.993 3.59302L8.62 8.36002L11.993 19.105L15.412 8.36102L11.993 3.59302Z" fill="#05C46B" />
            <path d="M6.58299 16.882L11.252 19.639L8.16999 9.99097L6.58299 16.882Z" fill="#05C46B" />
            <path
              d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.628 0 12 0ZM18.225 17.475L12.171 21.024C12.112 21.058 12.047 21.075 11.982 21.075C11.916 21.075 11.85 21.057 11.792 21.023L5.774 17.472C5.632 17.389 5.562 17.223 5.599 17.064L7.682 8.18C7.693 8.133 7.713 8.088 7.741 8.049L11.677 2.484C11.747 2.385 11.861 2.326 11.982 2.325C12.118 2.298 12.217 2.383 12.288 2.481L16.296 8.05C16.325 8.091 16.346 8.136 16.357 8.185L18.402 17.067C18.438 17.227 18.367 17.392 18.225 17.475Z"
              fill="#05C46B" />
            <path d="M12.767 19.639L17.437 16.881L15.849 9.98999L12.767 19.639Z" fill="#05C46B" />
          </g>
        )
      default:
        return null
    }
  }

  render() {
    const { size, viewBox, color } = this.props

    return (
      <svg viewBox={viewBox} fill={color} preserveAspectRatio="xMidYMid meet" width={size} height={size}>
        {this.getIcon()}
      </svg>
    )
  }
}

export default Icon