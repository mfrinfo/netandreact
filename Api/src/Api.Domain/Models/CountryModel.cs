using System;

namespace Api.Domain.Models
{
    public class CountryModel
    {
        private Guid _id;
        public Guid Id
        {
            get { return _id; }
            set { _id = value; }
        }
        private string _name;
        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }
        private string _capital;
        public string Capital
        {
            get { return _capital; }
            set { _capital = value; }
        }
        private long _population;
        public long Population
        {
            get { return _population; }
            set { _population = value; }
        }
        private string _area;
        public string Area
        {
            get { return _area; }
            set { _area = value; }
        }
        private decimal _populationDensity;
        public decimal PopulationDensity
        {
            get { return _populationDensity; }
            set { _populationDensity = value; }
        }
        private string _officialLanguage;
        public string OfficialLanguage
        {
            get { return _officialLanguage; }
            set { _officialLanguage = value; }
        }
        private string _svgFile;
        public string SvgFile
        {
            get { return _svgFile; }
            set { _svgFile = value; }
        }
        private string _objectJson;
        public string ObjectJson
        {
            get { return _objectJson; }
            set { _objectJson = value; }
        }
        private DateTime _createAt;
        public DateTime CreateAt
        {
            get { return _createAt; }
            set
            {
                _createAt = value == null ? DateTime.UtcNow : value;
            }
        }
        private DateTime _updateAt;
        public DateTime UpdateAt
        {
            get { return _updateAt; }
            set { _updateAt = value; }
        }
    }
}
