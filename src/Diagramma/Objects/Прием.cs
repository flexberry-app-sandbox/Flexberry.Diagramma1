﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Diagramma
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Прием.
    /// </summary>
    // *** Start programmer edit section *** (Прием CustomAttributes)

    // *** End programmer edit section *** (Прием CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПриемE", new string[] {
            "Дата as \'Дата\'",
            "Ставка as \'Ставка\'"})]
    [View("ПриемL", new string[0])]
    public class Прием : ICSSoft.STORMNET.DataObject
    {
        
        private int fIDорганизации;
        
        private System.DateTime fДата;
        
        private int fIDсотрудника;
        
        private int fСтавка;
        
        private IIS.Diagramma.Организация fОрганизация;
        
        private IIS.Diagramma.Сотрудник fСотрудник;
        
        // *** Start programmer edit section *** (Прием CustomMembers)

        // *** End programmer edit section *** (Прием CustomMembers)

        
        /// <summary>
        /// IDорганизации.
        /// </summary>
        // *** Start programmer edit section *** (Прием.IDорганизации CustomAttributes)

        // *** End programmer edit section *** (Прием.IDорганизации CustomAttributes)
        public virtual int IDорганизации
        {
            get
            {
                // *** Start programmer edit section *** (Прием.IDорганизации Get start)

                // *** End programmer edit section *** (Прием.IDорганизации Get start)
                int result = this.fIDорганизации;
                // *** Start programmer edit section *** (Прием.IDорганизации Get end)

                // *** End programmer edit section *** (Прием.IDорганизации Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Прием.IDорганизации Set start)

                // *** End programmer edit section *** (Прием.IDорганизации Set start)
                this.fIDорганизации = value;
                // *** Start programmer edit section *** (Прием.IDорганизации Set end)

                // *** End programmer edit section *** (Прием.IDорганизации Set end)
            }
        }
        
        /// <summary>
        /// IDсотрудника.
        /// </summary>
        // *** Start programmer edit section *** (Прием.IDсотрудника CustomAttributes)

        // *** End programmer edit section *** (Прием.IDсотрудника CustomAttributes)
        public virtual int IDсотрудника
        {
            get
            {
                // *** Start programmer edit section *** (Прием.IDсотрудника Get start)

                // *** End programmer edit section *** (Прием.IDсотрудника Get start)
                int result = this.fIDсотрудника;
                // *** Start programmer edit section *** (Прием.IDсотрудника Get end)

                // *** End programmer edit section *** (Прием.IDсотрудника Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Прием.IDсотрудника Set start)

                // *** End programmer edit section *** (Прием.IDсотрудника Set start)
                this.fIDсотрудника = value;
                // *** Start programmer edit section *** (Прием.IDсотрудника Set end)

                // *** End programmer edit section *** (Прием.IDсотрудника Set end)
            }
        }
        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (Прием.Дата CustomAttributes)

        // *** End programmer edit section *** (Прием.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (Прием.Дата Get start)

                // *** End programmer edit section *** (Прием.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (Прием.Дата Get end)

                // *** End programmer edit section *** (Прием.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Прием.Дата Set start)

                // *** End programmer edit section *** (Прием.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (Прием.Дата Set end)

                // *** End programmer edit section *** (Прием.Дата Set end)
            }
        }
        
        /// <summary>
        /// Ставка.
        /// </summary>
        // *** Start programmer edit section *** (Прием.Ставка CustomAttributes)

        // *** End programmer edit section *** (Прием.Ставка CustomAttributes)
        public virtual int Ставка
        {
            get
            {
                // *** Start programmer edit section *** (Прием.Ставка Get start)

                // *** End programmer edit section *** (Прием.Ставка Get start)
                int result = this.fСтавка;
                // *** Start programmer edit section *** (Прием.Ставка Get end)

                // *** End programmer edit section *** (Прием.Ставка Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Прием.Ставка Set start)

                // *** End programmer edit section *** (Прием.Ставка Set start)
                this.fСтавка = value;
                // *** Start programmer edit section *** (Прием.Ставка Set end)

                // *** End programmer edit section *** (Прием.Ставка Set end)
            }
        }
        
        /// <summary>
        /// Прием.
        /// </summary>
        // *** Start programmer edit section *** (Прием.Организация CustomAttributes)

        // *** End programmer edit section *** (Прием.Организация CustomAttributes)
        [PropertyStorage(new string[] {
                "Организация"})]
        [NotNull()]
        public virtual IIS.Diagramma.Организация Организация
        {
            get
            {
                // *** Start programmer edit section *** (Прием.Организация Get start)

                // *** End programmer edit section *** (Прием.Организация Get start)
                IIS.Diagramma.Организация result = this.fОрганизация;
                // *** Start programmer edit section *** (Прием.Организация Get end)

                // *** End programmer edit section *** (Прием.Организация Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Прием.Организация Set start)

                // *** End programmer edit section *** (Прием.Организация Set start)
                this.fОрганизация = value;
                // *** Start programmer edit section *** (Прием.Организация Set end)

                // *** End programmer edit section *** (Прием.Организация Set end)
            }
        }
        
        /// <summary>
        /// Прием.
        /// </summary>
        // *** Start programmer edit section *** (Прием.Сотрудник CustomAttributes)

        // *** End programmer edit section *** (Прием.Сотрудник CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудник"})]
        [NotNull()]
        public virtual IIS.Diagramma.Сотрудник Сотрудник
        {
            get
            {
                // *** Start programmer edit section *** (Прием.Сотрудник Get start)

                // *** End programmer edit section *** (Прием.Сотрудник Get start)
                IIS.Diagramma.Сотрудник result = this.fСотрудник;
                // *** Start programmer edit section *** (Прием.Сотрудник Get end)

                // *** End programmer edit section *** (Прием.Сотрудник Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Прием.Сотрудник Set start)

                // *** End programmer edit section *** (Прием.Сотрудник Set start)
                this.fСотрудник = value;
                // *** Start programmer edit section *** (Прием.Сотрудник Set end)

                // *** End programmer edit section *** (Прием.Сотрудник Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПриемE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПриемE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПриемE", typeof(IIS.Diagramma.Прием));
                }
            }
            
            /// <summary>
            /// "ПриемL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПриемL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПриемL", typeof(IIS.Diagramma.Прием));
                }
            }
        }
    }
}
